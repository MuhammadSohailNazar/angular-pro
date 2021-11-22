import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  ctx = {
    $implicit: 'Muhammad Sohail Nazar',
    location: 'Islamabad, Pakistan',
  };
}
