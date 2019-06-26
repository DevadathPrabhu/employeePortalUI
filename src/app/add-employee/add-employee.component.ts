import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  employeeList = [];
  employee: Employee;
  error: boolean = false;
  message: string = '';
  errorLabel: string = 'Error:';
  empIdLabel: string = 'Employee ID';
  empFNameLabel: string = 'First Name';
  empLNameLabel: string = 'Last Name';
  empDOBLabel: string = 'Date of birth';
  empGenderLabel: string = 'Gender';
  empDeptLabel: string = 'Department';
  submitLabel: string = 'Submit';

  constructor(public employeeService : EmployeeService) { }

  ngOnInit() {
    this.employee = new Employee();
  }

  /**
   * On submitting the form. saves the employee details by calling addEmployee()
   * in employee service
   */
  onSubmit(){

    var validDetails: boolean = this.validateEmployeeDetails();

    if(validDetails){
      var employeeDetails = this.getEmployeeDetails();

      console.log("addEmployee - onSubmit() - Employee details filled in the form: ", employeeDetails);
      console.log('addEmployee - onSubmit() - Current employee list', this.employeeList);

      this.employeeService.addEmployee(employeeDetails).subscribe(
        (response) => {
          this.employeeList.push(response.body);
          this.error = false;
          this.message = 'Employee saved successfully!';
          console.log('addEmployee - onSubmit() - Employee added', response.body);
          console.log('addEmployee - onSubmit() - Updated employee list', this.employeeList);
        },
        (error) => {
          console.log('addEmployee - onSubmit() - Error : ', error);
          this.error = true;
          this.message = error.error?error.error.message:'Adding employee failed :(';
        }
      );
    }

    if(!this.error)
      this.employee = this.clearEmployee(this.employee);

  }

  validateEmployeeDetails():boolean{
    if(this.employee.id === undefined || this.employee.id == null || this.employee.id <= 0){
      this.error = true;
      this.message = 'Employee Id is mandatory and must be >= 1';
      return false;
    }
    else if(this.employee.fName == null){
      this.error = true;
      this.message = 'First Name is mandatory!';
      return false;
    }
    return true;
  }

  /**
   * Returns the employee JSON with details filled in form
   */
  getEmployeeDetails() : any {
    return {
      "Id":this.employee.id,
      "FName":this.employee.fName,
      "LName":this.employee.lName,
      "Gender":this.employee.gender,
      "Dob":this.employee.dob,
      "Department":this.employee.department
    }
  }

  /**
   * Clears the employee details
   * @param employee 
   */
  private clearEmployee(employee:Employee): Employee {
    employee.id = null;
    employee.fName = null;
    employee.lName = null;
    employee.gender = null;
    employee.dob = null;
    employee.department = null;

    return employee;
  }

}
