import { Component } from '@angular/core';
import { RootService } from '../root.service';
import { FeatureService } from './feature.service';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss'],
})
export class FeatureComponent {
  get rootServiceCount(): number {
    return this.rootService.count;
  }

  get featureServiceCount(): number {
    return this.featureService.count;
  }

  constructor(
    private rootService: RootService,
    private featureService: FeatureService
  ) {}

  incrementRootServiceCount(): void {
    this.rootService.increment();
  }

  incrementFeatureServiceCount(): void {
    this.featureService.increment();
  }
}
