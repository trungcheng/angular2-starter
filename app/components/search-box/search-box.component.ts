import { Component, Input } from '@angular/core';

declare const module;

@Component({
	selector: 'search-box',
	moduleId: module.id,
	templateUrl: 'search-box.component.html',
	styleUrls: ['search-box.component.css']
})
export class SearchBoxComponent {
	@Input('placeholder')
	placeHolderFirst = 'Enter your first name';
	placeHolderLast = 'Enter your last name';

	fname: string;
	lname: string;

	constructor() {
		this.fname = 'Dinh';
		this.lname = 'Trung';
	}

	clearFirst(fname) {
		this.fname = "";
	}

	clearLast(lname) {
		this.lname = "";
	}
}