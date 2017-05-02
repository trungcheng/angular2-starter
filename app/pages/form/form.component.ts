import { Component } from '@angular/core';

declare const module;

@Component({
	selector: 'form-demo',
	moduleId: module.id,
	templateUrl: 'form.component.html'
})
export class FormComponent {

	onSubmit(value: any) {
		console.log(value);
	}
	
}