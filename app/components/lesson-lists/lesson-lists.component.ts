import { Component, Input } from '@angular/core';

declare const module;

@Component({
	selector: 'lesson-lists',
	moduleId: module.id,
	templateUrl: 'lesson-lists.component.html'
})
export class LessonsComponent {
	
	@Input()
	lessons = [];

}