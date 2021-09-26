import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExternalRoutingModule } from './external-routing.module';
import { AbcComponent } from './abc/abc.component';


@NgModule({
  declarations: [AbcComponent],
  imports: [
    CommonModule,
    ExternalRoutingModule
  ]
})
export class ExternalModule { }
