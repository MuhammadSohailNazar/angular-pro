import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Output,
  Renderer2,
} from '@angular/core';
import { IUser } from './User';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss'],
})
export class AuthFormComponent {
  title: string = 'Login';
  @Output('submitted') submitted = new EventEmitter<IUser>();

  constructor() {}

  onSubmit(form: any): void {
    this.submitted.emit(form);
  }
}
