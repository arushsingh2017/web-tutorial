import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{ PageComponent} from './page/page.component';
import{ContactComponent} from './contact/contact.component';
import{AboutComponent} from './about/about.component';

const routes: Routes = [
  {path:'pages/:slug', component:PageComponent},
  {path:'about', component:AboutComponent},
  {path:'contact', component:ContactComponent}
];

@NgModule({ 
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaticpagesRoutingModule { }
