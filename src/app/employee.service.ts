import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable()
export class EmployeeService {

  baseUrl: string = "http://localhost:8080";

  constructor(private httpClient: HttpClient) { }

  /**
   * Returns all the employees.
   * Query param sort=true is sent to sort the result based on fName
   */
  getEmployees(): any {

    return this.httpClient.get(this.baseUrl + '/employees', { observe: 'response', params: {sort:"true"} });

  }

  /**
   * Saves the given employee details.
   * @param employee 
   */
  addEmployee(employee): any {

    return this.httpClient.post(this.baseUrl+'/employee', employee, {
      headers: new HttpHeaders({'Content-Type': 'application/json'}),
      observe: 'response'
    });

  }

}
