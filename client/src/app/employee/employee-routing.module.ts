import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../helpers/auth.guard';
import { RoleGuard } from '../helpers/role.guard';
import { AdminComponent } from './admin/admin.component';
import { EmployeeContainer } from './employee.container';
import { EmployeeComponent } from './employee/employee.component';

const routes: Routes = [
  {
    path: '',
    component: EmployeeContainer,
    children: [
      {
        path: 'employee', component: EmployeeComponent, canActivate: [AuthGuard]
      },
      {
        path: 'admin',
        component: AdminComponent,
        canActivate: [RoleGuard]
      },
      {
        path: '',
        redirectTo: 'employee',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
