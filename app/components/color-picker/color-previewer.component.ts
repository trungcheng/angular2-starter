import { Component, Input } from '@angular/core';

@Component({
	selector: 'color-previewer',
	template: `
		<div class="color-previewer" [ngStyle]="{'color': color}">
			Preview Color Text
		</div>
	`,
	styles: [`
		.color-previewer {
			margin-top: 10px;
			font-size: 18px;
		}
	`]
})
export class ColorPreviewerComponent {
	
	@Input()
	color: string;

}