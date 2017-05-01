import { Component } from '@angular/core';
import { LessonsService } from '../../services/lessons.service';

import { lessonsData } from '../../data/lessons';

declare const module;

@Component({
	selector: 'app',
	moduleId: module.id,
	templateUrl: 'home.component.html' 
})
export class HomeComponent {
	
	color: string;

	toggled = false;

	onToggle(toggled) {
		console.log(toggled);
	}

	lessons = lessonsData;

	constructor(private lessonsService: LessonsService) {

	}
}