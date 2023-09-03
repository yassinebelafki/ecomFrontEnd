import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ProductPayload} from "../globalModels/product.payload";
import {environment} from "../../environment/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public products:ProductPayload[]=[]

  constructor(private httpClient:HttpClient) {

  }


  addProduct(proudct:any){
    return  this.httpClient.post(environment.baseUrl+"products",proudct)
  }

  UpdateProduct(proudct:any){
    return  this.httpClient.put(environment.baseUrl+"products",proudct)
  }


  getAllProducts():Observable<ProductPayload[]>{
    return  this.httpClient.get<ProductPayload[]>(environment.baseUrl+"products")
  }

  getOneProducts(productId:string):Observable<ProductPayload>{
    return  this.httpClient.get<ProductPayload>(environment.baseUrl+"products/"+productId)
  }

  // getAllProducts(){
  //     this.httpClient.get<ProductPayload[]>(environments.baseUrl+"products").subscribe(
  //       (response)=>{
  //         this.products=response;
  //         this.products.map(
  //           product => ({
  //             ...product,
  //             banner:'data:image/jpeg;base64,' + product.bannerData
  //           })
  //         )
  //         for (let i = 0; i < this.products.length; i++) {
  //           this.products[i].banner='data:image/jpeg;base64,' + this.products[i].bannerData
  //           // @ts-ignore
  //           for (let j = 0; j < this.products[i].productImagesDto.length; j++) {
  //             // @ts-ignore
  //             this.products[i].productImagesDto[j].image='data:image/jpeg;base64,' + this.products[i].productImagesDto[j].imageData
  //           }
  //         }
  //
  //       }
  //     )
  // }
}
