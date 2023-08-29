import {Component, OnInit} from '@angular/core';
import Swal from "sweetalert2";
import {ActivatedRoute} from "@angular/router";
import {CartService} from "../../../cart/services/cart.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  constructor(private activeRoute:ActivatedRoute,private cartService:CartService) {
  }

  ngOnInit(): void {
    this.activeRoute.queryParamMap.subscribe(
      (params)=>{
        if (params.get("command") == 'true'){
          this.cartService.notifyCartUpdated()
          setTimeout(()=>{

            Swal.fire({
              icon: 'success',
              title: 'Your Order has been Submitted',
              showConfirmButton: false,
              timer: 1500
            })
          },500)

        }
      }
    );

  }

}
