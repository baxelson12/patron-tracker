import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { AdminService } from './admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  employees$: Observable<any>;
  lookupResults$: Observable<any>;

  employeeForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    email: new FormControl('')
  })

  lookupForm = new FormGroup({
    from: new FormControl(''),
    to: new FormControl('')
  })

  constructor(private as: AdminService, private ts: ToastrService) {}

  ngOnInit(): void {
    this.employees$ = this.as.getEmployees();
  }

  deleteEmployee(employeeId: number) {
    console.log(`deleting ${employeeId}`)
    this.as.deleteEmployee(employeeId).subscribe((val) => {
      console.log(val);
      this.employees$ = this.as.getEmployees();
      this.ts.success("Employee deleted.")
    });
  }

  createEmployee() {
    console.log("Creating");
    this.as.createEmployee(this.employeeForm.value).subscribe((val) => {
      console.log(val);
      this.employeeForm.reset();
      this.employees$ = this.as.getEmployees();
      this.ts.success("Employee created.")
    })
  }

  lookupRange() {
    this.lookupResults$ = this.as.lookupRange(this.lookupForm.value);
  }

}
