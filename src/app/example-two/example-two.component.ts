import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-example-two',
  templateUrl: './example-two.component.html',
  styleUrls: ['./example-two.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ExampleTwoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
