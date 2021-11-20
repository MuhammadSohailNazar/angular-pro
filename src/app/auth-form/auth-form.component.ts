import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IUser } from './User';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss']
})
export class AuthFormComponent implements OnInit {
  @Output("submitted") submitted = new EventEmitter<IUser>();
  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: any): void {
    this.submitted.emit(form);
  }

}
