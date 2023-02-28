import { Injectable, OnDestroy } from '@angular/core';

@Injectable()
export class HomeService implements OnDestroy {
  count = 0;

  constructor() {
    console.log(`${this.constructor.name} is created.`);
  }

  ngOnDestroy(): void {
    console.log(`${this.constructor.name} is destroyed.`);
  }

  increment(): void {
    this.count++;
  }
}
