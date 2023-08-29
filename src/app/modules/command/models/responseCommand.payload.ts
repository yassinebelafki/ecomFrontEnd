import {CheckoutAdressComponent} from "../../checkout/componenets/checkout-adress/checkout-adress.component";
import {UserAddressPayload} from "../../checkout/models/UserAddress.payload";
import {CartPayload} from "../../cart/models/cart.payload";
import {CartItem} from "../../cart/models/cart.item";


export interface ResponseCommandPayload {
  id?:number,
  price:number,
  localDateTime:Date,
  status:string,
  confirmed:boolean,
  address:UserAddressPayload,
  shoppingCarts:CartItem[]
}
