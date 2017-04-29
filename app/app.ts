import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { SearchBox } from './search-box/search-box.component';

@Component({
	selector: 'app',
	template: `<search-box></search-box>`
})
export class App {
	
}

@NgModule({
  	imports:      [ BrowserModule ],
  	declarations: [ App, SearchBox ],
  	bootstrap:    [ App ]
})
export class AppModule {

}

platformBrowserDynamic().bootstrapModule(AppModule);