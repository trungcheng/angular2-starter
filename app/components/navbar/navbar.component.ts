import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

declare const module;

@Component({
	selector: 'app',
	moduleId: module.id,
	templateUrl: 'navbar.component.html',
	directives: [ROUTER_DIRECTIVES]
})
export class NavbarComponent {
	
}