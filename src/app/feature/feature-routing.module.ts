import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { features } from 'process';
import { Feature1Component } from './feature1/feature1.component';
import { Feature2Component } from './feature2/feature2.component';

const routes: Routes = [
  {path:'Feature1', component:Feature1Component},
  {path:'Feature2', component:Feature2Component}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }
