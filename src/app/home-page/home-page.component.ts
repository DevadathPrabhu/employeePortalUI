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

  ngOnInit() { }

  /**
   * Toggles the component display flag to display add employee form
   */
  onClickAddEmployee(){

    this.addEmployeeComp = true;
    this.dispEmployeeComp = false;

  }

  /**
   * Toggles the component display form to display the employee details
   */
  onClickGetEmployees(){

    this.addEmployeeComp = false;
    this.dispEmployeeComp = true;

  }

}
