import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable()
export class EmployeeService {

  baseUrl: string = "http://localhost:8080";
  employees: Observable<any>;

  constructor(private httpClient: HttpClient) { }

  getEmployees(): any {

    this.employees = this.httpClient.get(this.baseUrl + '/employee');
    return this.employees;
    
  }

  addEmployee(employee): Observable<any> {

    return this.httpClient.post<any>(this.baseUrl+'/employee', employee, httpOptions);

  }

}
