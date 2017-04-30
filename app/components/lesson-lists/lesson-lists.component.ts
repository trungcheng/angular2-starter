import { Component, Input } from '@angular/core';
import { LessonsService } from '../../services/lessons.service';

declare const module;

@Component({
	selector: 'lesson-lists',
	moduleId: module.id,
	templateUrl: 'lesson-lists.component.html'
})
export class LessonsComponent {
	
	@Input()
	lessons = [];

	constructor(private lessonsService: LessonsService) {

	}

}