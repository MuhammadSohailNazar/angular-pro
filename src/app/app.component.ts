import { Component } from '@angular/core';
import { FilesizePipe } from './filesize.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [FilesizePipe],
})
export class AppComponent {
  mapped: any = [];
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
  constructor(private filesizePipe: FilesizePipe) {
    this.mapped = this.files.map((file) => {
      return {
        name: file.name,
        size: this.filesizePipe.transform(file.size, 'mb'),
        type: file.type,
      };
    });
  }
}
