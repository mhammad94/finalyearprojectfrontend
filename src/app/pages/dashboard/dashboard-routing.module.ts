import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { AdminViewComponent } from './components/admin-view/admin-view.component';
import { DiscussionForumComponent } from './components/discussion-forum/discussion-forum.component';
import { authGuard } from '../../guard/auth.guard';
import { permissionGuard } from '../../guard/permission.guard';
import { BanUserComponent } from './components/ban-user/ban-user.component';

const routes: Routes = [{ path: '', component: DashboardComponent,
children:[
{
  path:'admin',
  component:AdminViewComponent,
  canActivate:[permissionGuard]
},
{
  path:'forum',
  component:DiscussionForumComponent,
  canActivate:[permissionGuard]
},
{
  path:'banuser',
  component:BanUserComponent,
  canActivate:[permissionGuard]
}
] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
