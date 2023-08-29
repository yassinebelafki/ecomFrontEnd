import {Component, OnInit} from '@angular/core';
import {CheckoutService} from "../../services/checkout.service";
import {UserAddressPayload} from "../../models/UserAddress.payload";
import {LocalStorageService} from "ngx-webstorage";
import {Router} from "@angular/router";

@Component({
  selector: 'app-checkout-adress',
  templateUrl: './checkout-adress.component.html',
  styleUrls: ['./checkout-adress.component.scss']
})
export class CheckoutAdressComponent implements OnInit{

  userAddresses:UserAddressPayload[]=[]
  addressOption!: any;
  userNewAddress!: string;
  userNewPhone!: number;


  constructor(private checkoutService:CheckoutService,
              private localStorage:LocalStorageService,
              private router: Router) {
  }
  ngOnInit(): void {
    this.checkoutService.getAllAddresses().subscribe(
      (response)=>{
        this.userAddresses=response
      }
    )
  }

  GoToPayment() {
    if (this.addressOption){
      this.localStorage.store("addressId",this.addressOption)
      this.router.navigate(['/checkout/payment']);

    }
    else {
      this.checkoutService.addNewAddress({
        addressContent:this.userNewAddress,
        phone:this.userNewPhone
      }).subscribe(
        (response)=>{
          this.localStorage.store("addressId",response.id)
          this.router.navigate(['/checkout/payment']);
        },
        error => {
          console.log(error)
        }
      )
    }
  }
}
