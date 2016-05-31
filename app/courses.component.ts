import {Component} from 'angular2/core'
import {CourseService} from './course.service'
import {AutoGrowDirective} from './auto-grow.directive'

@Component({
  selector: 'courses',
  template: `
  <h2>Courses</h2>
  {{title}}
  <input type="text" [(ngModel)]="title"/>
  <ul>
    <li *ngFor="#course of courses" (click)="onClick($event)">
    {{ course}}
    </li>
  </ul>

  `,
  providers: [CourseService],
  directives: [AutoGrowDirective]
})
export class CoursesComponent {
  title = "The title of courses page";
  inputText = "text";
  courses;

  constructor(courseService: CourseService){
    this.courses = courseService.getCourses();
  }

  onClick($event){
    this.title="test";
  }
}
