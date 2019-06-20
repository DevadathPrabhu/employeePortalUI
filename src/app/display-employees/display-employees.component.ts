import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-display-employees',
  templateUrl: './display-employees.component.html',
  styleUrls: ['./display-employees.component.css']
})
export class DisplayEmployeesComponent implements OnInit {

  employeeList = [];

  constructor(private employeeService : EmployeeService) { }

  ngOnInit() {
    this.onClickGetEmployees();
  }

  onClickGetEmployees(){

    this.employeeList = this.employeeService.getEmployees()
      .subscribe(employees => this.employeeList = employees);

  }

}
