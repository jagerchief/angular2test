import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component'
import {AuthorsComponent} from './authors.component'
import {StarComponent} from './star.component'

@Component({
    selector: 'my-app',
    template: `
    <h1>Hello Angular</h1>
    <star></star>
    <courses></courses>
    <authors></authors>`,
    directives: [CoursesComponent,AuthorsComponent,StarComponent]
})
export class AppComponent { }
