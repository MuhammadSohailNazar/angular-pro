import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, FormGroup } from '@angular/forms';
import { Product } from '../../models/product';

@Component({
  selector: 'app-stock-inventory',
  templateUrl: './stock-inventory.component.html',
  styleUrls: ['./stock-inventory.component.scss'],
})
export class StockInventoryComponent implements OnInit {
  products: Product[] = [
    { id: 1, price: 100, name: 'MacBook M1 Max Pro ' },
    { id: 2, price: 200, name: 'MacBook M1 Pro M1' },
    { id: 3, price: 300, name: 'IPhone 13 Pro' },
    { id: 4, price: 400, name: 'IPhone 13 Pro Max' },
    { id: 5, price: 500, name: 'IPhone 14 Max' },
  ];
  form = this.fb.group({
    store: this.fb.group({
      branch: '',
      code: '',
    }),
    selector: this.createStock({}),
    stock: this.fb.array([
      this.createStock({ product_id: 1, quantity: 10 }),
      this.createStock({ product_id: 3, quantity: 50 }),
    ]),
  });
  constructor(private fb: FormBuilder) {}

  createStock(stock: any) {
    return this.fb.group({
      product_id: parseInt(stock.product_id, 10) || '',
      quantity: stock.quantity || 10,
    });
  }

  ngOnInit() {}

  addStock(stock: any) {
    const control = this.form.get('stock') as FormArray;
    control.push(this.createStock(stock));
  }

  removeStock({ group, index }: { group: FormGroup; index: number }) {
    const control = this.form.get('stock') as FormArray;
    control.removeAt(index);
  }
  onSubmit() {
    console.log(this.form.value);
  }
}
