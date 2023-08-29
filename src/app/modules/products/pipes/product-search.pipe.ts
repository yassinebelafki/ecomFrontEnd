import { Pipe, PipeTransform } from '@angular/core';
import {ProductPayload} from "../../globalModels/product.payload";

@Pipe({
  name: 'productSearch'
})
export class ProductSearchPipe implements PipeTransform {

  transform(products: ProductPayload[], searchTerm: string): ProductPayload[] {
    if (!products || !searchTerm) {
      return products;
    }

    searchTerm = searchTerm.toLowerCase();

    return products.filter(product => {
      return product.title.toLowerCase().includes(searchTerm);
    });
  }
}
