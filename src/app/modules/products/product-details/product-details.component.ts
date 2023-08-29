import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../../globalServices/product.service";
import {ProductPayload} from "../../globalModels/product.payload";
import {ProductEvaluationPayload} from "../../globalModels/productEvaluation.payload";
import {CartService} from "../../cart/services/cart.service";
import {ToastrService} from "ngx-toastr";
import {CartPayload} from "../../cart/models/cart.payload";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit{
 quantity:number=1;
  private productId: string | null;
  product!:ProductPayload;
  myProduct!:ProductPayload;
  productFetched!:boolean;


  constructor(private activeRoute:ActivatedRoute,private productService:ProductService,private cartService:CartService, private toastr:ToastrService) {
   this.productId= activeRoute.snapshot.paramMap.get("id");
   console.log(this.productId)
 }


  ngOnInit(): void {
    this.productFetched=false;
    if (this.productService.products.length == 0){
      this.fetchOneProduct()
    }
    else {
      // @ts-ignore
      this.product = this.productService.products.find(product => product.id == this.productId);
      this.productFetched=true
    }


  }

  fetchOneProduct(){
    // @ts-ignore
    this.productService.getOneProducts(this.productId).subscribe(
      (response)=>{
        this.myProduct=response;
        console.log(response)
        this.myProduct.banner='data:image/jpeg;base64,' + this.myProduct.bannerData
          // @ts-ignore
          for (let j = 0; j < this.myProduct.productImagesDto.length; j++) {
            // @ts-ignore
            this.myProduct.productImagesDto[j].image='data:image/jpeg;base64,' + this.myProduct.productImagesDto[j].imageData
          }
          // @ts-ignore
          this.myProduct.globalProductRating=this.calculateRating(this.myProduct.productEvaluation)

        // @ts-ignore
        this.product = this.myProduct;
        this.productFetched=true
      }
    )
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


  incrementQuantity() {
    this.quantity++;
  }

  decrementQuantity() {
    if (this.quantity>1){
      this.quantity--;
    }
  }


  addToCart(id: number | undefined, quantity: number) {
    const cartPayload:CartPayload={
      // @ts-ignore
      productId:id,
      quantity:this.quantity
    }
    this.cartService.addToCart(cartPayload).subscribe(
      (response)=>{
        console.log(response+"*********")
        this.toastr.success("Product Added To Cart")
        this.cartService.notifyCartUpdated()
      },
      error => {
        console.log(error)
      }
    );
  }

}
