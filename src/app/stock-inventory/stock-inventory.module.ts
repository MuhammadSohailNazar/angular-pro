import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockInventoryComponent } from './container/stock-inventory/stock-inventory.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [StockInventoryComponent],
  exports:[StockInventoryComponent]
})
export class StockInventoryModule { }
