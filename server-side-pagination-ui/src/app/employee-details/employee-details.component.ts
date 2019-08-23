import { Component, OnInit } from '@angular/core';
import { EmployeeDetails } from '../Models/employee-details';
import { EmployeeDetailsService } from './employee-details.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  private getEmployeesUrl: string;
  private queryStringObject: object;
  private employeeDetails: EmployeeDetails[] = new Array();
  private skipCount = 0;
  private displayCount = 10;
  private resultsLength = 100;
  isLoading: boolean;
  displayedColumns: string[] = ['id', 'name', 'designation', 'salary'];
  // [ngClass]="{'classname' : conditionFlag}"

  constructor(private employeeDetailsService: EmployeeDetailsService) {}

  ngOnInit() {
    this.getEmployeeDetails();
  }

  getEmployeeDetails() {
    this.isLoading = true;
    this.getEmployeesUrl = 'EmployeeDetails/GetAllEmployees';
    this.queryStringObject = {
      skipCount: this.skipCount,
      displayCount: this.displayCount
    };

    this.employeeDetailsService
      .getEmployeeDetails(this.getEmployeesUrl, this.queryStringObject)
      .subscribe(
        response => {
          this.employeeDetails = response;
          this.isLoading = false;
          console.log(this.employeeDetails);
        },
        error => {
          console.log(error);
        }
      );
  }

  setSkipCount($event) {
    console.log($event);
    this.skipCount = $event.pageIndex * $event.pageSize;
    this.displayCount = $event.pageSize;
    this.getEmployeeDetails();
  }
}
