import {
  AfterViewInit,
  Component,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { IUser } from './auth-form/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  @ViewChild('entry', { read: ViewContainerRef }) entry: ViewContainerRef;
  @ViewChild("tmpl") tmpl: TemplateRef<any>;
  constructor(
  ) {}


  ngAfterViewInit() {
    this.entry.createEmbeddedView(this.tmpl,{
      $implicit: "sohail nazar",
      location: "Karachi"
    });
  }

  

  login(user: IUser) {
    console.log('login', user);
  }
}
