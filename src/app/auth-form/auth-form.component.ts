import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IUser } from './User';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss']
})
export class AuthFormComponent implements OnInit {
  @Output("submitted") onSubmit = new EventEmitter<IUser>();
  constructor() { }

  ngOnInit() {
  }

}
