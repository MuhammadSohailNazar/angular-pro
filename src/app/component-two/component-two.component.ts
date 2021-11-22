import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-two',
  templateUrl: './component-two.component.html',
  styleUrls: ['./component-two.component.scss']
})
export class ComponentTwoComponent implements OnInit {
  @Input() user: any;
  constructor() { }

  ngOnInit() {
  }

  update(){
    this.user.name = 'Muhammad Sohail';
  }

}
