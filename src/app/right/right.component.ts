import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../model/employee.service';
// import { Employee } from 'src/app/model/employee.model';
@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.css']
})
export class RightComponent implements OnInit {

  // constructor(private employeeService: EmployeeService) { }

  constructor() { }
  ngOnInit() {
    // this.getAllEmployee();
  }

  // getAllEmployee() {
  //   this.employeeService.getAllEmployee();
  // }

  // editEmployee(employee: Employee) {
  //   this.employeeService.currentEmployee = Object.assign({}, employee);
  // }

  // deleteEmployee(id: number) {
  //   this.employeeService.deleteEmployee(id).subscribe(
  //     (data) => {
  //       this.getAllEmployee();
  //     });
  // }


}
