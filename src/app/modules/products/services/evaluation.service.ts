import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environment/environment";
import {ProductEvaluationPayload} from "../../globalModels/productEvaluation.payload";

@Injectable({
  providedIn: 'root'
})
export class EvaluationService {

  constructor(private http:HttpClient) { }


  getAllEvaluations(productId:number){
    this.http.get<ProductEvaluationPayload[]>(environment.baseUrl+"evaluation/"+productId)
  }

  submitEvaluation(evaluation: ProductEvaluationPayload) {
    return this.http.post(environment.baseUrl+"evaluation",evaluation)
  }

  canComment(productId: number | undefined){
    return this.http.get<boolean>(environment.baseUrl+"evaluation/cancomment/"+productId)
  }
}
