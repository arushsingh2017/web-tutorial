import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import{AdminModule} from './admin/admin.module';
import{CourseModule} from './course/course.module';
import{StaticpagesModule} from './staticpages/staticpages.module';
import{AuthRoutingModule} from './auth/auth-routing.module';
import{FeatureModule} from './feature/feature.module';
import{HttpClientModule  } from '@angular/common/http';
import {BookserviceService } from './bookservice.service';
import{ServiceFeatureService} from './service-feature.service';
import { ManishComponent } from './manish/manish.component';
import { GrandchildComponent } from './child/grandchild/grandchild.component';
import { TicketComponent } from './ticket/ticket.component';
import { ReservestionComponent } from 'src/reservestion/reservestion.component';
import { BusseatComponent } from './busseat/busseat.component';




@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    ManishComponent,
    GrandchildComponent,
    TicketComponent,
    ReservestionComponent,
    BusseatComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StaticpagesModule,
    CourseModule,
    AdminModule,
    FeatureModule,
    AuthRoutingModule,
    HttpClientModule
    
  ],
  providers: [BookserviceService, ServiceFeatureService],
  bootstrap: [AppComponent]
})
export class AppModule { }
