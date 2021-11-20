import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChildren,
  EventEmitter,
  Output,
  QueryList,
  ViewChild,
} from '@angular/core';
import { AuthMessageComponent } from '../auth-message/auth-message.component';
import { AuthRememberComponent } from '../auth-remember/auth-remember.component';
import { IUser } from './User';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss'],
})
export class AuthFormComponent implements AfterContentInit, AfterViewInit {
  @ContentChildren(AuthRememberComponent)
  remembers: QueryList<AuthRememberComponent>;
  @ViewChild(AuthMessageComponent) message: AuthMessageComponent;
  @Output('submitted') submitted = new EventEmitter<IUser>();

  showMessage: boolean = false;
  constructor() {}

  ngAfterViewInit() {
    setTimeout(() => {
      this.message.days = 30;
    }, 0);
  }

  ngAfterContentInit() {
    this.remembers.forEach((item) => {
      item.checked.subscribe(
        (checked: boolean) => (this.showMessage = checked)
      );
    });
  }

  onSubmit(form: any): void {
    this.submitted.emit(form);
  }
}
