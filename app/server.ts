declare const require;

var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var _ = require('lodash');
var path = require('path');

import { lessonsData } from './data/lessons';

var app = express();

app.use(express.static('.'));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(cors());

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

var server = app.listen(3000, () => {
	console.log("Server running at http://localhost:3000");
});