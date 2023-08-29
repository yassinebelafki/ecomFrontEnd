import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {ProductService} from "../../globalServices/product.service";
import {ProductPayload} from "../../globalModels/product.payload";
import {ProductEvaluationPayload} from "../../globalModels/productEvaluation.payload";


@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent implements OnInit, OnChanges {

  products: ProductPayload[] = []
  @Input() best5products: boolean = false;
  productFetched!: boolean;
  @Input() searchTerm!: string;
  @Input() prixHtoL!: boolean;
  @Input() prixLtoh!: boolean;

  constructor(private productService: ProductService) {
  }

  ngOnChanges(changes: SimpleChanges): void {
        console.log("change")
    console.log(this.prixHtoL)
    }
  ngOnInit(): void {
    this.productFetched=false;
    if (this.productService.products.length == 0){
      this.fetchAllProduct()
    }
    else {
      this.products = this.productService.products;
      this.productFetched=true
      if (this.best5products){
        this.checkBest5products();
      }
    }

  }


  fetchAllProduct(){
    this.productService.getAllProducts().subscribe(
      (response)=>{
        this.products=response;
        this.products.map(
          product => ({
            ...product,
            banner:'data:image/jpeg;base64,' + product.bannerData
          })
        )
        for (let i = 0; i < this.products.length; i++) {
          this.products[i].banner='data:image/jpeg;base64,' + this.products[i].bannerData
          // @ts-ignore
          for (let j = 0; j < this.products[i].productImagesDto.length; j++) {
            // @ts-ignore
            this.products[i].productImagesDto[j].image='data:image/jpeg;base64,' + this.products[i].productImagesDto[j].imageData
          }
          // @ts-ignore
          this.products[i].globalProductRating=this.calculateRating(this.products[i].productEvaluation)
        }
        this.productService.products = this.products;
        this.productFetched=true
        if (this.best5products){
          this.checkBest5products();
        }
      }
    )
  }

  checkBest5products(){
    this.sortBestProducts
    this.products=this.products.slice(0, 4)
  }
  sortBestProducts(){
    this.products.sort((a, b) => {
      if (a.globalProductRating && b.globalProductRating) {
        return b.globalProductRating - a.globalProductRating;
      }
      return 0;
    });
  }
   calculateRating(productEvaluation: ProductEvaluationPayload[]) {
    if (productEvaluation==null)
    return 0;
     let totalEvaluation = 0;
     for (const data of productEvaluation) {
       totalEvaluation += data.evaluationNumber;
     }
     return  totalEvaluation / productEvaluation.length;
   }

}
