import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environment/environment";

@Injectable({
  providedIn: 'root'
})
export class ProductAdminService {

  constructor(private http:HttpClient) { }


  deleteProduct(productId: number | undefined){
   return   this.http.delete(environment.baseUrl+"products/"+productId)
  }
}
