import {Component, Input} from '@angular/core';
import {CartItem} from "../../../../cart/models/cart.item";

@Component({
  selector: 'app-product-order',
  templateUrl: './product-order.component.html',
  styleUrls: ['./product-order.component.scss']
})
export class ProductOrderComponent {
  @Input() cartItems:CartItem[]=[]

}
