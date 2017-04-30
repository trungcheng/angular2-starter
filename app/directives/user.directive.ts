import { Directive, Input } from '@angular/core';

@Directive({
	selector: 'user'
})
export class User {
	
	@Input()
	id: number;

	@Input()
	name: string;

}