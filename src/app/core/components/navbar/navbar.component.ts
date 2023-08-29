import { Component } from '@angular/core';
import {AuthService} from "../../../modules/auth/services/auth.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {


    loggedin:boolean=this.authService.islogedin();
    menuToggeled:boolean=false;
    cartToggeled:boolean=false;
    inCartb:boolean=false;


  cartItemsNumber:number=0

  constructor(private authService: AuthService) {

  }


  logout() {
    this.authService.logout()
  }

  toggleCart() {
    if (!this.cartToggeled || !this.inCartb) {
      this.cartToggeled=!this.cartToggeled;
    }
  }

  inCart() {
    this.inCartb=!this.inCartb
  }

  changeCartItemsNbr($event: number) {
    this.cartItemsNumber=$event;
  }

  showCommands() {

  }
}
