import {Component, OnInit} from '@angular/core';
import {Course} from "../../_models/course.model";
import {CourseService} from "../../_service/course.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-course-view',
  templateUrl: './course-view.component.html',
  styleUrls: ['./course-view.component.css']
})
export class CourseViewComponent implements OnInit {
  course: Course | undefined;
  private routeSub: Subscription | undefined;

  constructor(private courseService: CourseService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.getCourse();

  }

  getCourse() {
    this.routeSub = this.route.params.subscribe(params => {
      this.courseService.getCourseById().subscribe({
        next: data => {
          this.course = data.find(c => c.id == params['id'])
        }
      })
    });
  }

  goToCourseList() {
    this.router.navigateByUrl('/list');
  };

}
