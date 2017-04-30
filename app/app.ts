import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { SearchBoxComponent } from './components/search-box/search-box.component';
import { ColorPickerComponent } from './components/color-picker/color-picker.component';
import { ColorPreviewerComponent } from './components/color-picker/color-previewer.component';
import { UsersComponent } from './components/user-lists/user-lists.component';
import { LessonsComponent } from './components/lesson-lists/lesson-lists.component';

import "rxjs/Rx";

import { ToggleOnClick } from './directives/toggle-on-click.directive';
import { User } from './directives/user.directive';

import { LessonsService } from './services/lessons.service';

import { lessonsData } from './data/lessons';

@Component({
	selector: 'app',
	templateUrl: './app/components/main/main.component.html' 
})
export class AppComponent {
	
	color: string;

	toggled = false;

	onToggle(toggled) {
		console.log(toggled);
	}

	lessons = lessonsData;

	constructor(private lessonsService: LessonsService) {

	}

}

@NgModule({
  	imports: [ BrowserModule, FormsModule ],
  	declarations: [ 
  		AppComponent, 
  		SearchBoxComponent, 
  		ColorPickerComponent, 
  		ColorPreviewerComponent,
  		UsersComponent,
  		LessonsComponent,
  		ToggleOnClick,
  		User
  	],
  	bootstrap: [ AppComponent ],
  	providers: [LessonsService]
})
export class AppModule {

}

platformBrowserDynamic().bootstrapModule(AppModule);