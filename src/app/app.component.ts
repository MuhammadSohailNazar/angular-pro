import { Component } from '@angular/core';
import { IUser } from './auth-form/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-pro';

  createUser(user: IUser) {
    console.log('create user', user);
  }

  login(user: IUser) {
    console.log('login', user);
  }
}
