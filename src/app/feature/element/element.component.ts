import { Component } from '@angular/core';
import { RootService } from '../../root.service';
import { FeatureService } from '../feature.service';
import { ElementService } from './element.service';

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.scss'],
  providers: [ElementService],
})
export class ElementComponent {
  get rootServiceCount(): number {
    return this.rootService.count;
  }

  get featureServiceCount(): number {
    return this.featureService.count;
  }

  get elementServiceCount(): number {
    return this.elementService.count;
  }

  constructor(
    private rootService: RootService,
    private featureService: FeatureService,
    private elementService: ElementService
  ) {}

  incrementRootServiceCount(): void {
    this.rootService.increment();
  }

  incrementFeatureServiceCount(): void {
    this.featureService.increment();
  }

  incrementElementServiceCount(): void {
    this.elementService.increment();
  }
}
