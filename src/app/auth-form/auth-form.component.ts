import {
  AfterContentInit,
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  ElementRef,
  EventEmitter,
  Output,
  QueryList,
  Renderer2,
  ViewChild,
  ViewChildren,
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
  @ViewChildren(AuthMessageComponent) messages: QueryList<AuthMessageComponent>;
  @ViewChild('email') email: ElementRef;
  @Output('submitted') submitted = new EventEmitter<IUser>();

  showMessage: boolean = false;
  constructor(private cd: ChangeDetectorRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.messages.forEach((message) => {
      message.days = 30;
    });
    this.cd.detectChanges();
    this.renderer.setAttribute(this.email.nativeElement,"placeholder","Enter your email address");
    this.renderer.addClass(this.email.nativeElement,"email");
    this.renderer.selectRootElement(this.email.nativeElement).focus();
    //this.email.nativeElement.setAttribute('placeholder', 'Enter your email');
    // this.email.nativeElement.classList.add('email');
    // this.email.nativeElement.focus();

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
