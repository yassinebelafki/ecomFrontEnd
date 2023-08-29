import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CartService} from "../../services/cart.service";
import {CartItem} from "../../models/cart.item";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-cart-item-popup',
  templateUrl: './cart-item-popup.component.html',
  styleUrls: ['./cart-item-popup.component.scss']
})
export class CartItemPopupComponent implements OnInit{

  cartItems:CartItem[]=[]

  cartLength:number=0;
  @Output() cartLengthChange:EventEmitter<number>=new EventEmitter<number>();
  private subscription!: Subscription;

  constructor(private cartService:CartService) {

  }

  ngOnInit(): void {
    if (this.cartService.cartItems.length==0){
      this.fetchCartItems()
    }
    else {
      this.cartItems=this.cartService.cartItems
      this.updateCartitemsNbr()
    }
    this.cartService.action$.subscribe(actionData => {
      console.log("bruh")
        this.fetchCartItems()

    });
  }
  updateCartitemsNbr(){
    this.cartLength=this.cartItems.length;
    this.cartLengthChange.emit(this.cartLength)

  }

  fetchCartItems(){
    this.cartService.getCartItems().subscribe(
      (response)=>{
        this.cartItems=response;
        this.productTraitement()
        this.cartService.cartItems=this.cartItems;
        this.updateCartitemsNbr()
      },
      error => {
        console.log(error)
      }
    )
  }


  productTraitement(){
    for (let i = 0; i <this.cartItems.length; i++) {
      this.cartItems[i].product.banner='data:image/jpeg;base64,' + this.cartItems[i].product.bannerData

    }
  }



}
