import { Pipe, PipeTransform } from '@angular/core';
import {ProductPayload} from "../../globalModels/product.payload";

@Pipe({
  name: 'evaluation'
})
export class EvaluationPipe implements PipeTransform {

  transform(products: ProductPayload[]): ProductPayload[] {
    if (!products || products.length === 0) {
      return [];
    }

    // Sort the products based on the evaluation in descending order
    // @ts-ignore
    return products.sort((a, b) => b.productEvaluation[0].evaluation - a.productEvaluation[0].evaluation);
  }

}
