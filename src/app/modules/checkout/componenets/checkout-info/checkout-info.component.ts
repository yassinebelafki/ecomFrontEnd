import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CartItem} from "../../../cart/models/cart.item";
import {Subscription} from "rxjs";
import {CartService} from "../../../cart/services/cart.service";
import {CheckoutService} from "../../services/checkout.service";
import {LocalStorageService} from "ngx-webstorage";
import {CommandPayload} from "../../models/command.payload";
import {Router} from "@angular/router";

@Component({
  selector: 'app-checkout-info',
  templateUrl: './checkout-info.component.html',
  styleUrls: ['./checkout-info.component.scss']
})
export class CheckoutInfoComponent implements OnInit{
  cartItems:CartItem[]=[]

  cartLength:number=0;
  @Output() cartLengthChange:EventEmitter<number>=new EventEmitter<number>();
  private subscription!: Subscription;

  constructor(private cartService:CartService,private checkoutService:CheckoutService,
              private localStorage:LocalStorageService,
              private router: Router) {

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
        console.log(response)
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


  calculateTotal() {
    let total:number=0;
    for (let i = 0; i < this.cartItems.length; i++) {
      total= total + (this.cartItems[i].product.price*this.cartItems[i].quantity)
    }
    return total
  }


  submitCommand() {
    let command:CommandPayload={
      price:this.calculateTotal(),
      addressId:Number(this.localStorage.retrieve("addressId"))
    }
    console.log(command)
    this.checkoutService.addNewCommad(command).subscribe(
      (response)=>{
        this.router.navigate([''], { queryParams: { command: true } });

      },
      error => {
        console.log(error)
      }
    )
  }
}
