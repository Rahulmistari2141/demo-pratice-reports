import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { SecureComponent } from './secure.component';

const routes: Routes = [
  { path:'dashboard', loadComponent: () => import('../../module/secure/dashboard/dashboard.component').then(m => m.DashboardComponent),},
  { path:'report', loadComponent: () => import('../../module/secure/report/report.component').then(m => m.ReportComponent),}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecureRoutingModule { }
