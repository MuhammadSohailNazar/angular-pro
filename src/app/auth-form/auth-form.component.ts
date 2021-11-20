import {
  AfterContentInit,
  Component,
  ContentChild,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { AuthRememberComponent } from '../auth-remember/auth-remember.component';
import { IUser } from './User';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss'],
})
export class AuthFormComponent implements AfterContentInit {
  @ContentChild(AuthRememberComponent) remember: AuthRememberComponent;
  @Output('submitted') submitted = new EventEmitter<IUser>();

  showMessage: boolean = false;
  constructor() {}
  ngAfterContentInit() {
    if(this.remember){
      this.remember.checked.subscribe((checked: boolean) => {
        this.showMessage = checked;
      });
    }
  }

  onSubmit(form: any): void {
    this.submitted.emit(form);
  }
}
