import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Employee, Employees } from '../../models/app.model';

@Component({
 // selector:"app-jj-component",
  templateUrl: './app.emplist.view.html'
})
export class EmplistComponent implements OnInit {
  emp: Employee;
  emps = Employees;
  headers: Array<string>;
  @Output()
  clickRow: EventEmitter<Employee>;
  constructor() {
    this.emp = new Employee(0, '', 0);
    this.headers = new Array<string>();
    this.clickRow = new EventEmitter<Employee>();
  }

  ngOnInit(): void {
    for(let p in this.emp) {
      this.headers.push(p);
    }
  }

  getSelectedEmp(e: Employee): void {
    this.emp = e;
    console.log(JSON.stringify(this.emp));
    this.clickRow.emit(this.emp);
  }

}
