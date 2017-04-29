import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@Component({
	selector: 'my-app',
	template: `<h1>Hello World !</h1>`
})
export class App {
	
}

@NgModule({
  	imports:      [ BrowserModule ],
  	declarations: [ App ],
  	bootstrap:    [ App ]
})
export class AppModule {

}

platformBrowserDynamic().bootstrapModule(AppModule);