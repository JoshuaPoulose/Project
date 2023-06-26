import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { course } from './course';


@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private apiUrl = 'http://localhost:8081/courses';

  constructor(private http: HttpClient) {}

  addCourse(course: course): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, course);
  }
}
