import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../model/employee.service';
import { Employee } from 'src/app/model/employee.model';

@Component({
  selector: 'app-middle',
  templateUrl: './middle.component.html',
  styleUrls: ['./middle.component.css']
})
export class MiddleComponent implements OnInit {
  // router: any;
  public details: object = [];
  constructor(private route: ActivatedRoute, private router: Router, private employeeService: EmployeeService) { }

  ngOnInit() {
    this.getAllEmployee();




  }

  getAllEmployee() {
    this.employeeService.getAllEmployee();
  }

  addUser(): void {
    this.router.navigate(['add-user']);
  };

  createEmployee(currentEmployee: Employee) {
    if (currentEmployee.id === null) {
      console.log('Create');
      this.employeeService.createEmployee(currentEmployee).subscribe(
        (data) => {
          this.employeeService.getAllEmployee();
        });
    }

    else {
      console.log('Update');
      this.employeeService.updateEmployee(currentEmployee).subscribe(
        (data) => {
          this.employeeService.getAllEmployee();
        });
    }

  }


  // updateEmployee1(employee: Employee) {
  //   if (confirm("Do you want to update required notes ?")) {
  //     this.employeeService.currentEmployee = Object.assign({}, employee);
  //   }
  // }

  updateEmployee(employee: Employee) {
    this.employeeService.updateEmployee(employee).subscribe(
      (data) => {
        this.employeeService.currentEmployee = Object.assign({}, employee);
      });
    //alert("Your notes removed successfully !");
  }

  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id).subscribe(
      (data) => {
        this.getAllEmployee();
      });
    //alert("Your notes removed successfully !");
  }
  showDetails() {
    this.router.navigate(['link'], { relativeTo: this.route });
    // let obj = this.employeeService.allEmployee.filter(m => m.tittle == tittle);
    // this.details = obj;
    // console.log(obj);
  }
  show(tittle: string) {
    let obj = this.employeeService.allEmployee.filter(m => m.title == tittle);
    this.details = obj;
  }



}
