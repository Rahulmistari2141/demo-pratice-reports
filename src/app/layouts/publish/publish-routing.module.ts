import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { PublishComponent } from './publish.component';

const routes: Routes = [
  { path:'front-dashboard-login', loadComponent: () => import('../../module/publish/front-dashboard/front-dashboard.component').then(m => m.FrontDashboardComponent),},
  { path:'front-report', loadComponent: () => import('../../module/publish/front-report/front-report.component').then(m => m.FrontReportComponent),}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublishRoutingModule { }
