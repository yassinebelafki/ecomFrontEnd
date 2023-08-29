import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './components/hero/hero.component';
import { HomeComponent } from './components/home/home.component';
import {ProductsModule} from "../products/products.module";
import {ProductSingleComponent} from "../products/product-single/product-single.component";
import {NgbRating} from "@ng-bootstrap/ng-bootstrap";
import {CoreModule} from "../../core/core.module";
import {RouterOutlet} from "@angular/router";
import { CounterComponent } from './components/hero/counter/counter.component';
import {SharedModule} from "../../shared/shared.module";
import { AboutusComponent } from './components/aboutus/aboutus.component';



@NgModule({
  declarations: [
    HeroComponent,
    HomeComponent,
    CounterComponent,
    AboutusComponent
  ],
    imports: [
        CommonModule,
        ProductsModule,
        NgbRating,
        CoreModule,
        RouterOutlet,
        SharedModule
    ],
  exports:[

  ]
})
export class CommunsModule { }
