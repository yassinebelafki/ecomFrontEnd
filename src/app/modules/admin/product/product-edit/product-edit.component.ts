import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {ProductPayload} from "../../../globalModels/product.payload";
import {ProductImagePayload} from "../../../globalModels/productImage.payload";
import {ProductService} from "../../../globalServices/product.service";
import {HttpClient, HttpRequest} from "@angular/common/http";
import {environment} from "../../../../environment/environment";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit{
    @Output() addToggled: EventEmitter<boolean>=new EventEmitter<boolean>();
    @Output() productAdded: EventEmitter<boolean>=new EventEmitter<boolean>();
    productFrom!:FormGroup;
    private banner!: File;
    private images: any[]=[];
    spinnerToggle:boolean=false
    @Input() updatedProduct:ProductPayload | undefined;


    constructor(private productService:ProductService,private httpclient:HttpClient) {

    }

  ngOnInit(): void {
    this.productFrom = new FormGroup<any>({
      name:new FormControl(this.updatedProduct?.title,Validators.required),
      description : new FormControl(this.updatedProduct?.description,Validators.required),
      category:new FormControl(this.updatedProduct?.category,Validators.required),
      price:new FormControl(this.updatedProduct?.price,Validators.required),
      discount:new FormControl(this.updatedProduct?.discount,Validators.required),
      quantity:new FormControl(this.updatedProduct?.quantity,Validators.required),
      banner:new FormControl("",Validators.required),
      images:new FormControl("",Validators.required)

    })
    }

  closeAdd() {
      this.addToggled.emit(false)
  }


    submitProductFrom() {
      if (this.updatedProduct){
        this.updateProduct()
      }
      else {
        this.addProduct()
      }

    }

    addProduct(){
      const productPayload: ProductPayload = {
        title: this.productFrom.get('name')?.value,
        category: this.productFrom.get('category')?.value,
        description: this.productFrom.get('description')?.value,
        price: this.productFrom.get('price')?.value,
        quantity: this.productFrom.get('quantity')?.value,
        discount: this.productFrom.get('discount')?.value,
        globalProductRating:0
      };
      const formData = new FormData();
      formData.append('title', productPayload.title);
      formData.append('description', productPayload.description);
      formData.append('category', productPayload.category);
      formData.append('price', productPayload.price.toString());
      formData.append('discount', productPayload.discount.toString());
      formData.append('quantity', productPayload.quantity.toString());
      formData.append('banner',  this.banner,this.banner.name);
      for (let i = 0; i < this.images.length; i++) {
        formData.append('images', this.images[i],this.images[i].name);
      }
      this.spinnerToggle=true
      this.productService.addProduct(formData).subscribe(
        response => {
          this.addToggled.emit(false)
          this.productAdded.emit(true)
          this.spinnerToggle=false
        },
        error => {
          console.log(error);
        }
      );
    }

  updateProduct(){
    // @ts-ignore
    const productPayload: ProductPayload = {
      id:this.updatedProduct?.id,
      title: this.productFrom.get('name')?.value,
      category: this.productFrom.get('category')?.value,
      description: this.productFrom.get('description')?.value,
      price: this.productFrom.get('price')?.value,
      quantity: this.productFrom.get('quantity')?.value,
      discount: this.productFrom.get('discount')?.value,
    };
    this.spinnerToggle=true
    this.productService.UpdateProduct(productPayload).subscribe(
      response => {
        console.log(response)
        this.addToggled.emit(false)
        this.productAdded.emit(true)
        this.spinnerToggle=false
      },
      error => {
        console.log(error);
      }
    );
  }



  onBannerChanged(event: Event) {
        // @ts-ignore
        this.banner = event.target.files[0];
    }

    onImagesChanged(event: any) {
        for (let i = 0; i < event.target.files.length; i++) {
                this.images[i]=event.target.files[i]
        }
    }
}
