import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminOrdersComponent } from './components/admin-orders/admin-orders.component';
import { ProductOrderComponent } from './components/product-order/product-order.component';



@NgModule({
  declarations: [
    AdminOrdersComponent,
    ProductOrderComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[AdminOrdersComponent,ProductOrderComponent]
})
export class AdminCommandModule { }
