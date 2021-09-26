import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaticpagesRoutingModule } from './staticpages-routing.module';
import { PageComponent } from './page/page.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [PageComponent, AboutComponent, ContactComponent],
  imports: [
    CommonModule,
    StaticpagesRoutingModule
  ]
})
export class StaticpagesModule {
  constructor()
  {
    console.log('Static module')
  }
 }
