import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import {CounterComponent} from "./counter/counter.component";

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit{
  isProductFetched:boolean=false;
  ngOnInit(): void {
    setTimeout(() => {
      this.showText=true
    }, 500);
  }
  count = 200;
  duration = 5000;
  showText: boolean=false;


  trythis() {
    console.log("hitan")
  }

  productFetched($event: boolean) {
    console.log($event)
    this.isProductFetched = $event;
  }
}

