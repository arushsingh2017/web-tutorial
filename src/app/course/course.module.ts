import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseRoutingModule } from './course-routing.module';
import { CourseFeatureComponent } from './course-feature/course-feature.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseRecentComponent } from './course-recent/course-recent.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { CourseCategoriesComponent } from './course-categories/course-categories.component';


@NgModule({
  declarations: [CourseFeatureComponent, CourseListComponent, CourseRecentComponent, CourseDetailsComponent, CourseCategoriesComponent],
  imports: [
    CommonModule,
    CourseRoutingModule
  ],
  exports:[
    CourseFeatureComponent
  ]
})
export class CourseModule { 
  constructor()
  {
    console.log('couser module')
  }
}
