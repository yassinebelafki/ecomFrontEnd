import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ProductService} from "../../../globalServices/product.service";
import {ProductPayload} from "../../../globalModels/product.payload";
import {ProductAdminService} from "../services/product-admin.service";
import {toJSDate} from "@ng-bootstrap/ng-bootstrap/datepicker/ngb-calendar";
import Swal from "sweetalert2";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit{

    products:ProductPayload[]=[]

    constructor(private productService:ProductService,
                private cdr:ChangeDetectorRef,
                private productAdminService:ProductAdminService) {
    }


    addToggled:boolean=false;

    toggleAdd() {
        this.addToggled=true;
    }

    addToggledListinner($event: boolean) {
        this.addToggled = $event;
        this.updateToggled=$event
    }
    image!:any;
  updateToggled: boolean=false;
  productToUpdate: ProductPayload | undefined;
  ngOnInit(): void {
    if (this.productService.products.length==0){
      this.fetchAllProduct()
    }
    else {
      this.products = this.productService.products;
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
        }
        this.productService.products = this.products;
      }
    )
  }

    closedToggled($event: boolean) {
        this.addToggled = $event
    }

    productAdded($event: boolean) {
        if ($event){
            this.fetchAllProduct()
        }
    }

  deleteProduct(id: number | undefined) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.productAdminService.deleteProduct(id).subscribe(
          reponse=>{
            this.fetchAllProduct()
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )

          },
          error => {
            console.log(error)
          }
        )

      }
    })



  }

  toggleUpdate(product:ProductPayload) {
    this.updateToggled=true;
    this.productToUpdate=product;

  }
}
