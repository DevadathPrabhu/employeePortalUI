import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-display-employees',
  templateUrl: './display-employees.component.html',
  styleUrls: ['./display-employees.component.css']
})
export class DisplayEmployeesComponent implements OnInit {

  employeeList = [];
  error: boolean = false;
  errorMsg: string = 'Error';

  constructor(private employeeService : EmployeeService) { }

  ngOnInit() {
    this.getEmployees();
  }

  /**
   * Invokes getEmployees() in the service to fetch the employee details
   */
  getEmployees(){

    this.employeeService.getEmployees()
      .subscribe((response) => {
        console.log('displayEmployees - getEmployees() - Result:', response.body);
        this.employeeList = response.body;
        this.error = false;
      }, (error) => {
        console.log('displayEmployees - getEmployees() - Error:', error);
        this.error = true;
        this.errorMsg = "Error: \n" + 
            (error.error?(error.error.error + " - "):"") +
            (error.error?error.error.message:"Fetching employees failed!");
      });

  }

}
