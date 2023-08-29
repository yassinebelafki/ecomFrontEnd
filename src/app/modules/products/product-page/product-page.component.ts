import { Component } from '@angular/core';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent {
  search!: string;
  prixHtoL!:boolean;
  prixLtoH!:boolean;

  sortProduct(event: any) {
    const selectedValue = event.target.value;
      if (selectedValue=='htpl'){
        this.prixHtoL=true
      }
    if (selectedValue=='ltoh'){
      this.prixLtoH=true
    }

  }
}
