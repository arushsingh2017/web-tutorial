import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoutingModule } from './-routing.module';
import { ReservestionComponent } from './reservestion/reservestion.component';


@NgModule({
  declarations: [ReservestionComponent],
  imports: [
    CommonModule,
    RoutingModule
  ]
})
export class Module { }
