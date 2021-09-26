import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { Feature1Component } from './feature1/feature1.component';
import { Feature2Component } from './feature2/feature2.component';
import { Feature3Component } from './feature3/feature3.component';


@NgModule({
  declarations: [Feature1Component, Feature2Component, Feature3Component],
  imports: [
    CommonModule,
    FeatureRoutingModule
  ]
})
export class FeatureModule { }
