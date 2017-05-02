import { NgModule, Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { routing, appRouterProviders } from './app.routes';

import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { ColorPickerComponent } from './components/color-picker/color-picker.component';
import { ColorPreviewerComponent } from './components/color-picker/color-previewer.component';
import { UsersComponent } from './components/user-lists/user-lists.component';
import { LessonsComponent } from './components/lesson-lists/lesson-lists.component';

import 'rxjs/Rx';

import { ToggleOnClick } from './directives/toggle-on-click.directive';
import { User } from './directives/user.directive';

import { LessonsService } from './services/lessons.service';

import { lessonsData } from './data/lessons';

@NgModule({
  	imports: [ 
  		BrowserModule, 
  		FormsModule,
  		ReactiveFormsModule,
  		HttpModule,
  		routing
  	],
  	declarations: [ 
  		NavbarComponent,
  		SearchBoxComponent, 
  		ColorPickerComponent,
  		ColorPreviewerComponent,
  		UsersComponent,
  		LessonsComponent,
  		ToggleOnClick,
  		User
  	],
  	bootstrap: [ NavbarComponent ],
  	providers: [ 
  		LessonsService, 
  		appRouterProviders,
  		{provide: LocationStrategy, useClass: HashLocationStrategy} 
  	]
})
export class AppModule {
	
}