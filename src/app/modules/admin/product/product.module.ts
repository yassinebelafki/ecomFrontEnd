import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    ProductListComponent,
    ProductEditComponent
  ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        FormsModule
    ],
    exports : [
        ProductListComponent,
        ProductEditComponent
    ]
})
export class ProductModule { }
