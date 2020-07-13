import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../../models/app.model';

@Component({
  // selector: 'app-name',
  templateUrl: './app.empdetails.view.html'
})
export class EmpDetailsComponent implements OnInit {
  private emp: Employee;
  constructor() {
    this.emp = new Employee(0, '', 0);
  }
  @Input()
  set Emp(val : Employee) {
     this.emp = val;
     console.log(`in details ${val}`);
  }
  get Emp(): Employee {
    return this.emp;
  }

  ngOnInit(): void { }
}
