import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  id: any;
  fName: any;
  lName: any;
  dob: any;
  gender: any;
  department: any;
  employeeList = [];

  constructor(private employeeService : EmployeeService) { }

  ngOnInit() {
  }

  onSubmit(){
    var employeeDetails = {
      "Id":this.id,
      "FName":this.fName,
      "LName":this.lName,
      "Gender":this.gender,
      "Dob":this.dob,
      "Department":this.department
    }

    console.log("Employee details filled in the form: ", JSON.stringify(employeeDetails));

    this.employeeService.addEmployee(employeeDetails)
      .subscribe(employees => this.employeeList.push(employees));

    console.log("Employee saved!")

  }

}
