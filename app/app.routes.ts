import { provideRouter, Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { FormComponent } from './pages/form/form.component';
import { ErrorComponent } from './pages/error/error.component';

const routes: Routes = [
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{ path: 'home', component: HomeComponent },
	{ path: 'form-validation', component: FormComponent }
];

export const appRouterProviders = [
  	provideRouter(routes)
];

export const routing = RouterModule.forRoot(routes);
