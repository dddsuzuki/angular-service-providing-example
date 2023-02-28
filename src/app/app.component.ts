import { Component } from '@angular/core';
import { RootService } from './root.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  get count(): number {
    return this.rootService.count;
  }

  constructor(private rootService: RootService) {}

  increment(): void {
    this.rootService.increment();
  }
}
