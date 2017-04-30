import { Directive, HostBinding, HostListener, Input, Output, EventEmitter } from '@angular/core';

@Directive({
	selector: '[toggle-on-click]',
	exportAs: 'collapsible'
})
export class ToggleOnClick {
	
	@Input("toggled")
	isToggled = true;

	@Output("toggled")
	toggleOutput = new EventEmitter();

	@HostBinding("class.toggled")
	get toggled() {
		return this.isToggled;
	}

	@HostListener('click')
	toggle() {
		this.isToggled = !this.isToggled;
		this.toggleOutput.emit(this.isToggled);
	}

}