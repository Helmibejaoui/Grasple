import {Component, OnInit} from '@angular/core';
import {Course} from "../../_models/course.model";
import {CourseService} from "../../_service/course.service";
import {Router} from "@angular/router";
import {TableHeader} from "../../_models/tableHeader.model";

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  courses: Course[] | undefined;
  tableHeaders: TableHeader[] = [{propertyName: 'id'}, {propertyName: 'name'}]
  booleanValue: any = false;
  private newArray: Course[] | undefined;


  constructor(private courseService: CourseService, private router: Router) {
  }

  ngOnInit(): void {
    this.getCourses();
  }

  getCourses() {
    this.courseService.getCourses().subscribe({
      next: data => {
        this.courses = data;
      }
    });
  }

  goToCourse(id: number) {
    this.router.navigateByUrl('/view/' + id);
  };

  sort(colName: string, boolean: boolean) {
    if (boolean) {
      // @ts-ignore
      this.courses.sort((a, b) => a[colName] < b[colName] ? 1 : a[colName] > b[colName] ? -1 : 0)
      this.booleanValue = !this.booleanValue
    } else {
      // @ts-ignore
      this.courses.sort((a, b) => a[colName] > b[colName] ? 1 : a[colName] < b[colName] ? -1 : 0)
      this.booleanValue = !this.booleanValue
    }
  }

  searchThis(data: any) {
    this.courses = this.newArray
    console.log(data)
    if (data) {
      // @ts-ignore
      this.courses = this.courses.filter(function (ele, i, array) {
        let arrayelement = ele.name.toLowerCase()
        return arrayelement.includes(data)
      })
    } else {
      console.log(this.courses)
    }
    console.log(this.courses)
  }

}
