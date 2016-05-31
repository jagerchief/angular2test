import {Component} from 'angular2/core'

@Component({
  selector: 'star',
  template: `
  <i class="glyphicon"
  [class.glyphicon-star]="isActive"
  [class.glyphicon-star-empty]="!isActive"
  (click)="onClick($event)"></i>
  `
})
export class StarComponent {
  isActive = true;
  onClick($event){
    this.isActive = !this.isActive;
  }
}
