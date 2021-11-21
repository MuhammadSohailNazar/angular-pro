import {
  AfterContentInit,
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ComponentFactoryResolver,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { AuthFormComponent } from './auth-form/auth-form.component';
import { IUser } from './auth-form/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  @ViewChild('entry', { read: ViewContainerRef }) entry: ViewContainerRef;

  constructor(
    private resolver: ComponentFactoryResolver,
    private cd: ChangeDetectorRef
  ) {}

  ngAfterViewInit() {
    const authFormFactory =
      this.resolver.resolveComponentFactory(AuthFormComponent);
    this.entry.createComponent(authFormFactory);
    this.cd.detectChanges();
  }

  login(user: IUser) {
    console.log('login', user);
  }
}
