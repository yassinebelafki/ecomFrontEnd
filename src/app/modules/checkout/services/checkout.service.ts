import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environment/environment";
import {Observable} from "rxjs";
import {UserAddressPayload} from "../models/UserAddress.payload";
import {CommandPayload} from "../models/command.payload";

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  constructor(private httpClient:HttpClient) { }



  getAllAddresses():Observable<UserAddressPayload[]>{
    return  this.httpClient.get<UserAddressPayload[]>(environment.baseUrl+"address")
  }
  addNewAddress(address:UserAddressPayload):Observable<UserAddressPayload>{
    return  this.httpClient.post<UserAddressPayload>(environment.baseUrl+"address",address)
  }
  addNewCommad(command:CommandPayload){
    return  this.httpClient.post(environment.baseUrl+"command",command)
  }

}
