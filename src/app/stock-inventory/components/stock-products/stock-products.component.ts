import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'stock-products',
  templateUrl: './stock-products.component.html',
  styleUrls: ['./stock-products.component.scss'],
})
export class StockProductsComponent implements OnInit {
  @Input() parent: FormGroup;
  @Output() removed = new EventEmitter<any>();
  get stocks() {
    return (this.parent.get('stock') as FormArray).controls;
  }
  constructor() {}

  onRemove(group: any, index: number) {
    this.removed.emit({ group, index });
  }

  ngOnInit() {}
}
