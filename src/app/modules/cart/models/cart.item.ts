import {ProductPayload} from "../../globalModels/product.payload";


export interface CartItem {
  id?:number,
  product:ProductPayload,
  quantity:number,
  ordered?:boolean
}
