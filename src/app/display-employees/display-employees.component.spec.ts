import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayEmployeesComponent } from './display-employees.component';
import { EmployeeService } from '../employee.service';
import { HttpClientModule } from '@angular/common/http';

describe('DisplayEmployeesComponent', () => {
  let component: DisplayEmployeesComponent;
  let fixture: ComponentFixture<DisplayEmployeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayEmployeesComponent ],
      imports: [ HttpClientModule ],
      providers: [ EmployeeService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
