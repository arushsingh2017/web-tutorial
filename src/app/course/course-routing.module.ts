import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{CourseListComponent} from './course-list/course-list.component';
import{CourseDetailsComponent} from './course-details/course-details.component';

const routes: Routes = [
  {path:'course', component:CourseListComponent},
  {path:'course/:id', component:CourseDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseRoutingModule { }
