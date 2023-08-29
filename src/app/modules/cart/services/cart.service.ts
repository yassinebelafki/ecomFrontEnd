import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CartPayload} from "../models/cart.payload";
import {environment} from "../../../environment/environment";
import {CartItem} from "../models/cart.item";
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private actionSubject = new Subject<any>();

  action$ = this.actionSubject.asObservable();

  constructor(private httpClient:HttpClient) { }

  cartItems:CartItem[]=[]

  addToCart(cartPayload:CartPayload){
    return  this.httpClient.post(environment.baseUrl+"cart",cartPayload)
  }

  getCartItems(){
    return  this.httpClient.get<CartItem[]>(environment.baseUrl+"cart")
  }

  notifyCartUpdated() {
    console.log("serv yes")
    this.actionSubject.next("updated")
  }

  deleteCartItem(productId: number | undefined){
    return  this.httpClient.delete(environment.baseUrl+"cart/"+productId)
  }
}
