import { Component, ContentChildren, QueryList } from '@angular/core';
import { User } from '../../directives/user.directive';

const USERS = [
	{ id: 1, name: 'Dinh Trung' },
	{ id: 2, name: 'Tran Cuong' },
	{ id: 5, name: 'Thai Hung' },
	{ id: 3, name: 'Pham Trong' },
	{ id: 4, name: 'Do Tuan' }
];

declare const module;

@Component({
	selector: 'users',
	moduleId: module.id,
	templateUrl: 'user-lists.component.html' 
})
export class UsersComponent {
	
	users = USERS;

	track(user) {
		return user ? user.id : undefined;
	}

	@ContentChildren(User)
	users: QueryList<User>;

}