import { Component } from '@angular/core';
import { IUser } from './auth-form/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  rememberMe: boolean = false;
  createUser(user: IUser) {
    console.log('create user', user);
  }

  login(user: IUser) {
    console.log('login', user, this.rememberMe);
  }

  rememberUser(remember: boolean) {
    this.rememberMe = remember;
  }
}
