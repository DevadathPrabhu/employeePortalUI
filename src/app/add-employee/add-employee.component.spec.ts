import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEmployeeComponent } from './add-employee.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeService } from '../employee.service';
import { of } from 'rxjs/observable/of';

describe('AddEmployeeComponent', () => {
  let component: AddEmployeeComponent;
  let fixture: ComponentFixture<AddEmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEmployeeComponent ],
      imports: [ HttpClientModule, FormsModule ],
      providers: [ EmployeeService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getEmployeeDetails', () => {
    component.employee.id = 1;
    component.employee.fName = 'Dev';
    component.employee.lName = 'Prabhu';
    component.employee.gender = 'M';
    component.employee.dob = '1992/05/05';
    component.employee.department = 'RD';
    spyOn(component, "getEmployeeDetails").and.callThrough();
    let expectedEmp = { 
      "Id":1,
      "FName":'Dev',
      "LName":'Prabhu',
      "Gender":'M',
      "Dob":'1992/05/05',
      "Department":'RD'
    }
    let employee = component.getEmployeeDetails();
    expect(employee.toString()).toBe(expectedEmp.toString());

  });

  it('should call onSubmit', () => {
    spyOn(component, "getEmployeeDetails").and.callFake(() => {
      return {
        "Id": 1,
        "FName": "Devadath",
        "LName": "Prabhu",
        "Gender": "Male",
        "Dob": "1994-05-31",
        "Department": "R&D"
      }
    })
    spyOn(component.employeeService, "addEmployee").and.returnValue(
      of(
        {
          body : [{
            "Id": 1,
            "FName": "Devadath",
            "LName": "Prabhu",
            "Gender": "Male",
            "Dob": "1994-05-31",
            "Department": "R&D"
          }]
        }
      )
    )
    component.onSubmit();
    expect(component.employeeList.length).toBe(1);
    expect(component.message).toBe('Employee saved successfully!');
    expect(component.error).toBeFalsy();
  });

});
