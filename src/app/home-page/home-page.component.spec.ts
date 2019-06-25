import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageComponent } from './home-page.component';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { DisplayEmployeesComponent } from '../display-employees/display-employees.component';
import { AddEmployeeComponent } from '../add-employee/add-employee.component';
import { HttpClientModule } from '@angular/common/http';

describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePageComponent, AddEmployeeComponent, DisplayEmployeesComponent ],
      imports: [ FormsModule, HttpClientModule ],
      providers: [ EmployeeService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call onClickAddEmployee', () => {
    spyOn(component, "onClickAddEmployee").and.callThrough();
    component.onClickAddEmployee();
    expect(component.addEmployeeComp).toBeTruthy();
    expect(component.dispEmployeeComp).toBeFalsy();
  });

  it('should call onClickGetEmployees', () => {
    spyOn(component, "onClickGetEmployees").and.callThrough();
    component.onClickGetEmployees();
    expect(component.dispEmployeeComp).toBeTruthy();
    expect(component.addEmployeeComp).toBeFalsy();
  });

});
