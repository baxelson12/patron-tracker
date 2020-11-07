import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'employee',
    loadChildren: () => import('./employee/employee.module').then(m=> m.EmployeeModule)
  },
  {
    path: 'patron',
    loadChildren: () => import('./patron/patron.module').then(m => m.PatronModule)
  },
  {
    path: '',
    redirectTo: 'patron',
    pathMatch: 'full'
  },
  {
    // Not found
    path: '**',
    redirectTo: 'patron'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
