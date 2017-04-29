import { Component, Input, Output, EventEmitter } from '@angular/core';
import { BLUE, RED } from '../../constants';

@Component({
	selector: 'color-picker',
	template: `
		<div class="color-title" [ngStyle]="{'color': color}">Pick a color:</div>
		<div class="color-picker">
			<div class="color-sample-blue" (click)="choose('${BLUE}')"></div>
			<div class="color-sample-red" (click)="choose('${RED}')"></div>
		</div>
	`,
	styles: [`
		.color-title {
			text-decoration: underline;
		}
		.color-picker {
			margin-top: 10px;
			display: inline-block;
		}
		.color-sample-blue {
			width: 50px;
			height: 50px;
			background: #b13138;
			border-radius: 5px;
			cursor: pointer;
			float: left;
			margin-right: 10px;
		}
		.color-sample-red {
			width: 50px;
			height: 50px;
			background: #1976d2;
			border-radius: 5px;
			cursor: pointer;
			float: left;
		}
	`]
})
export class ColorPickerComponent {
	
	@Input()
	color: string;

	@Output("color")
	colorOutput = new EventEmitter();

	choose(color:string) {
		this.color = color;
		this.colorOutput.emit(color);
	}

	reset() {
		this.choose('black');
	}
}