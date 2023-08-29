import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CartItem} from "../../models/cart.item";
import {Subscription} from "rxjs";
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.scss']
})
export class CartDetailsComponent implements OnInit{

  cartItems:CartItem[]=[]

  private subscription!: Subscription;

  constructor(private cartService:CartService) {

  }

  ngOnInit(): void {
    if (this.cartService.cartItems.length==0){
      this.fetchCartItems()
    }
    else {
      this.cartItems=this.cartService.cartItems
    }
    this.cartService.action$.subscribe(actionData => {
      console.log("bruh")
      this.fetchCartItems()

    });
  }

  fetchCartItems(){
    this.cartService.getCartItems().subscribe(
      (response)=>{
        this.cartItems=response;
        this.productTraitement()
        this.cartService.cartItems=this.cartItems;
        this.isDeleting=false
        console.log(this.cartItems)

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
  quantity:number=1;
  isDeleting: boolean=false;

  incrementQuantity(quantity:number) {
    quantity++;
  }

  decrementQuantity(quantity:number) {
    if (quantity>1){
      quantity--;
    }
  }

  deleteCartItem(id: number | undefined) {
    this.isDeleting=true
      this.cartService.deleteCartItem(id)
        .subscribe(
          response =>{
            this.fetchCartItems()
            this.cartService.notifyCartUpdated()

          },
          error => {
            this.fetchCartItems()
            this.cartService.notifyCartUpdated()

          }
        );
  }

  calculateTotal() {
    let total:number=0;
    for (let i = 0; i < this.cartItems.length; i++) {
      total= total + (this.cartItems[i].product.price*this.cartItems[i].quantity)
    }
    return total
  }
}
