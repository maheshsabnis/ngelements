import { Component } from '@angular/core';
import { Employee } from './models/app.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  emp: Employee;
  constructor() {
    this.emp = new Employee(0, '' , 0);
  }
  getEmployee(event): void {
    this.emp = event.detail;
    console.log('In App Component'+ JSON.stringify(this.emp));
  }
}
