import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { EmployeeDetails } from '../Models/employee-details';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDetailsService {
  constructor(private http: HttpClient) {}

  getEmployeeDetails(
    getEmployeesUrl: string,
    queryParams: any
  ): Observable<EmployeeDetails[]> {
    return this.http.get<EmployeeDetails[]>(
      environment.baseUrl + getEmployeesUrl,
      {
        params: queryParams
      }
    );
  }
}
