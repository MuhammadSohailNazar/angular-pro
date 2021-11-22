import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-one',
  templateUrl: './component-one.component.html',
  styleUrls: ['./component-one.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComponentOneComponent implements OnInit {
  @Input() user: any;
  constructor() { }

  ngOnInit() {
  }
  update(){
    this.user.name = 'Muhammad Sohail';
  }

}
