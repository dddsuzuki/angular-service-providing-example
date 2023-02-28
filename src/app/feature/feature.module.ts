import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureComponent } from './feature.component';
import { FeatureRoutingModule } from './feature-routing.module';
import { ElementComponent } from './element/element.component';
import { FeatureService } from './feature.service';

@NgModule({
  declarations: [FeatureComponent, ElementComponent],
  imports: [CommonModule, FeatureRoutingModule],
  providers: [FeatureService],
})
export class FeatureModule {}
