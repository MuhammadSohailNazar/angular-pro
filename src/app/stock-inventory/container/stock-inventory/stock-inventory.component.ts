import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Product } from '../../models/product';

@Component({
  selector: 'app-stock-inventory',
  templateUrl: './stock-inventory.component.html',
  styleUrls: ['./stock-inventory.component.scss'],
})
export class StockInventoryComponent implements OnInit {
  products : Product[] = [
    {id: 1, price: 100, name: 'MacBook M1 Max Pro '},
    {id: 2, price: 200, name: 'MacBook M1 Pro M1'},
    {id: 3, price: 300, name: 'IPhone 13 Pro'},
    {id: 4, price: 400, name: 'IPhone 13 Pro Max'},
    {id: 5, price: 500, name: 'IPhone 14 Max'},
  ];
  form = new FormGroup({
    store: new FormGroup({
      branch: new FormControl('B182'),
      code: new FormControl('1223'),
    }),
    selector: new FormGroup({
      product_id: new FormControl(''),
      quantity: new FormControl(10),
    }),
    stock: new FormArray([]),
  });
  constructor() {}

  ngOnInit() {}

  onSubmit() {
    console.log(this.form.value);
  }
}
