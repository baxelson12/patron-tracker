import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgxMaskModule } from 'ngx-mask';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeContainer } from './employee.container';
import { AdminComponent } from './admin/admin.component';
import { EmployeeComponent } from './employee/employee.component';


@NgModule({
  declarations: [EmployeeContainer, EmployeeComponent, AdminComponent],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    ZXingScannerModule,
    NgxMaskModule,
    ReactiveFormsModule
  ]
})
export class EmployeeModule { }
