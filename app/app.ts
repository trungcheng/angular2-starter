import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { SearchBoxComponent } from './components/search-box/search-box.component';
import { ColorPickerComponent } from './components/color-picker/color-picker.component';
import { ColorPreviewerComponent } from './components/color-picker/color-previewer.component';

@Component({
	selector: 'app',
	templateUrl: './app/components/main/main.component.html' 
})
export class App {
	
	color: string;

}

@NgModule({
  	imports:      [ BrowserModule, FormsModule ],
  	declarations: [ App, SearchBoxComponent, ColorPickerComponent, ColorPreviewerComponent ],
  	bootstrap:    [ App ]
})
export class AppModule {

}

platformBrowserDynamic().bootstrapModule(AppModule);