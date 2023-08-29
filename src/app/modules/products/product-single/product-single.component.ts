import {Component, Input} from '@angular/core';
import {ProductPayload} from "../../globalModels/product.payload";
import {CartService} from "../../cart/services/cart.service";
import {CartPayload} from "../../cart/models/cart.payload";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-product-single',
  templateUrl: './product-single.component.html',
  styleUrls: ['./product-single.component.scss']
})
export class ProductSingleComponent {
  constructor(private cartService:CartService, private toastr:ToastrService) {
  }

  @Input() product!:ProductPayload;

  @Input() prixHtoL!:boolean;

  @Input() prixLtoH!:boolean;


  actionshowed:boolean=false
  showActions() {
    this.actionshowed=true
  }

  removeActions() {
    this.actionshowed=false
  }

  addToCart(id: number | undefined, quantity: number) {
    const cartPayload:CartPayload={
      // @ts-ignore
      productId:id,
      quantity:quantity
    }
    this.cartService.addToCart(cartPayload).subscribe(
      (response)=>{
        console.log(response+"*********")
        this.toastr.success("Product Added To Cart")
        this.cartService.notifyCartUpdated()
      },
      error => {
        console.log(error)
      }
    );
  }
}
