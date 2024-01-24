import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivateFn } from '@angular/router';
import { authGuard } from './guard/auth.guard';
import { loggedinGuard } from './guard/loggedin.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/dashboard' },
  { path: 'dashboard',
  loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule)
  ,
  canActivate:[authGuard]
},
  {
    path:'auth',
    loadChildren:() => import('./pages/authentication/authentication.module').then(m => m.AuthenticationModule),
    canActivate:[loggedinGuard]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
