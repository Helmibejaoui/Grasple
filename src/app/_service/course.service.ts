import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, Subscription} from "rxjs";
import {Course} from "../_models/course.model";

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient) {
  }

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>('assets/courses.json', {responseType: 'json'});
  }

  getCourseById(): Observable<Course[]> {
    return this.http.get<Course[]>('assets/coursesDetails.json', {responseType: 'json'})

  }
}
