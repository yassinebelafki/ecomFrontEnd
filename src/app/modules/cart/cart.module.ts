import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartItemPopupComponent } from './components/cart-item-popup/cart-item-popup.component';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import {RouterLink} from "@angular/router";



@NgModule({
    declarations: [
        CartItemPopupComponent,
        CartDetailsComponent
    ],
    exports: [
        CartItemPopupComponent
    ],
  imports: [
    CommonModule,
    RouterLink
  ]
})
export class CartModule { }
