import {Component, Input, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

import {interval} from "rxjs";

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
  animations: [
    trigger('countAnimation', [
      state('start', style({ opacity: 0, transform: 'scale(0.5)' })),
      state('end', style({ opacity: 1, transform: 'scale(1)' })),
      transition('start => end',  animate('0ms ease-in')),
    ]),
  ],
})
export class CounterComponent implements OnInit{

  countState = 'start'; // Initial animation state
  count = 0;
  @Input() maxCount!:number;
  @Input() transitionTime!:number;
  @Input() showUpTime!:number;

  startCounting() {
    this.countState = 'end';
    this.count = 1;

    const interval = setInterval(() => {
      if (this.count < this.maxCount) {
        this.count++;
      } else {
        clearInterval(interval);
      }
    }, this.transitionTime);
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.startCounting();
    }, this.showUpTime);
  }
}
