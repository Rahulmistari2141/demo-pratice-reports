import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublishComponent } from './layouts/publish/publish.component';
import { SecureComponent } from './layouts/secure/secure.component';
import { authGuard } from './core/guards/auth.guard';
import { checkLoggedInGuard } from './core/guards/check-logged-in.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: '',
    canActivate:[checkLoggedInGuard],
    component: PublishComponent,
    loadChildren: () => import('./layouts/publish/publish.module').then(m => m.PublishModule)
  },
  {
    path: '',
    canActivate:[authGuard],
    component: SecureComponent,
    loadChildren: () => import('./layouts/secure/secure.module').then(m => m.SecureModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
