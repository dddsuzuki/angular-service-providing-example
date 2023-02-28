import { Component } from '@angular/core';
import { RootService } from '../root.service';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  get rootServiceCount(): number {
    return this.rootService.count;
  }

  get homeServiceCount(): number {
    return this.homeService.count;
  }

  constructor(
    private rootService: RootService,
    private homeService: HomeService
  ) {}

  incrementRootServiceCount(): void {
    this.rootService.increment();
  }

  incrementHomeServiceCount(): void {
    this.homeService.increment();
  }
}
