import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  files = [
    {
      name: 'File 1',
      size: 1223123,
      type: 'pdf',
    },
    {
      name: 'File 2',
      size: 12234,
      type: 'pdf',
    },
    {
      name: 'File 3',
      size: 4223432,
      type: 'pdf',
    },
  ];

  constructor() {}
}
