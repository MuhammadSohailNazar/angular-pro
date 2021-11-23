import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  items = [
    {
      name: 'Item 1',
      age: 10,
      location: 'USA',
    },
    {
      name: 'Item 2',
      age: 20,
      location: 'UK',
    },
    {
      name: 'Item 3',
      age: 30,
      location: 'Pakistan',
    },
  ];

  constructor() {
    setTimeout(() => {
      this.items = [
        ...this.items,
        { name: 'Item 4', age: 40, location: 'India' },
      ];
    }, 1000);
  }
}
