import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutInfoComponent } from './componenets/checkout-info/checkout-info.component';
import { CheckoutAdressComponent } from './componenets/checkout-adress/checkout-adress.component';
import {FormsModule} from "@angular/forms";
import {RouterLink} from "@angular/router";



@NgModule({
  declarations: [
    CheckoutInfoComponent,
    CheckoutAdressComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterLink
  ],
  exports : [CheckoutInfoComponent]
})
export class CheckoutModule { }
