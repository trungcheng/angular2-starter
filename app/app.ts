import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { SearchBoxComponent } from './components/search-box/search-box.component';
import { ColorPickerComponent } from './components/color-picker/color-picker.component';
import { ColorPreviewerComponent } from './components/color-picker/color-previewer.component';
import { UsersComponent } from './components/user-lists/user-lists.component';

import { ToggleOnClick } from './directives/toggle-on-click.directive';
import { User } from './directives/user.directive';

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

}

@NgModule({
  	imports: [ BrowserModule, FormsModule ],
  	declarations: [ 
  		AppComponent, 
  		SearchBoxComponent, 
  		ColorPickerComponent, 
  		ColorPreviewerComponent,
  		UsersComponent,
  		ToggleOnClick,
  		User
  	],
  	bootstrap: [ AppComponent ]
})
export class AppModule {

}

platformBrowserDynamic().bootstrapModule(AppModule);