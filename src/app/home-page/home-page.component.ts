import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  dispEmployeeComp: boolean = false;
  addEmployeeComp: boolean = false;

  constructor(private employeeService : EmployeeService) { }

  ngOnInit() {
  }

  onClickAddEmployee(){

    this.addEmployeeComp = true;
    this.dispEmployeeComp = false;

  }

  onClickGetEmployees(){

    this.addEmployeeComp = false;
    this.dispEmployeeComp = true;

  }

}
