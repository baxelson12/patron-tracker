import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatronComponent } from './patron.component';

const routes: Routes = [
    {
        path: '', 
        component: PatronComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatronRoutingModule { }
