import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CourseListComponent} from "./course/course-list/course-list.component";
import {CourseViewComponent} from "./course/course-view/course-view.component";

const routes: Routes = [
  { path: 'list', component: CourseListComponent },
  { path: 'view/:id', component: CourseViewComponent },
  { path: '', redirectTo: 'list', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
