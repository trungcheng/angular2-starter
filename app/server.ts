declare const require;

var express = require('express');
var multer = require("multer");
var cors = require('cors');
var bodyParser = require('body-parser');
var _ = require('lodash');
var path = require('path');

import { lessonsData } from './data/lessons';

var app = express();

app.use(express.static('.'));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }));
app.use(cors({ credentials: true, origin: 'http://localhost:8081' }));

const lessons = lessonsData;

app.route('/lessons')
	.get((req, res) => {
		res.status(200).json(lessons);
	})
	.post((req, res) => {
		lessons.push(req.body);
		res.status(200).send();
	});

app.route('/lessons/:lessonId')
	.delete((req, res) => {
		const lessonId = req.params.lessonId;
		const index = _.find(lessons, 
			lesson => lesson.id === lessonId
		);
		lessons.splice(index, 1);
		res.status(200).send();
	});

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/');
    },
    filename: function (req, file, cb) {
        var datetimestamp = Date.now();
        cb(null, file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length -1]);
    }
});
var upload = multer({ storage: storage }).single('file');

app.post('/upload', function(req, res) {
	req.set('enctype', 'multipart/form-data')
    upload(req,res,function(err) {
        console.log(req.file);
        console.log(req.data);
        if (err) throw err;
        res.json({ status: 200, message: 'Upload success' });
    });
});

var server = app.listen(3000, () => {
	console.log("Server running at http://localhost:3000");
});