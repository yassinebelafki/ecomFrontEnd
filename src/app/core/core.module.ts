import { NgModule } from '@angular/core';
import {CommonModule, NgIf} from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import {RouterLink} from "@angular/router";
import {CartModule} from "../modules/cart/cart.module";



@NgModule({
    declarations: [
        NavbarComponent,
        FooterComponent
    ],
    exports: [
        NavbarComponent,
        FooterComponent
    ],
    imports: [
        CommonModule,
        RouterLink,
        NgIf,
        CartModule
    ]
})
export class CoreModule { }
