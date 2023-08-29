import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductSingleComponent } from './product-single/product-single.component';
import {NgbRating} from "@ng-bootstrap/ng-bootstrap";
import {ProductEditComponent} from "../admin/product/product-edit/product-edit.component";
import { ListProductsComponent } from './list-products/list-products.component';
import { EvaluationPipe } from './pipes/evaluation.pipe';
import { ProductPageComponent } from './product-page/product-page.component';
import {ProductModule} from "../admin/product/product.module";
import {SharedModule} from "../../shared/shared.module";
import { ProductDetailsComponent } from './product-details/product-details.component';
import {RouterLink} from "@angular/router";
import { UserEvaluationComponent } from './user-evaluation/user-evaluation.component';
import { UserCommentComponent } from './user-comment/user-comment.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ProductSearchPipe } from './pipes/product-search.pipe';



@NgModule({
  declarations: [
    ProductSingleComponent,
    ListProductsComponent,
    EvaluationPipe,
    ProductPageComponent,
    ProductDetailsComponent,
    UserEvaluationComponent,
    UserCommentComponent,
    ProductSearchPipe
  ],
  imports: [
    CommonModule,
    NgbRating,
    NgbRating,
    ProductModule,
    SharedModule,
    RouterLink,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [ProductSingleComponent, ListProductsComponent]
})
export class ProductsModule { }
