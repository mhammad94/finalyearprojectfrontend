import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.state';
import { Observable, Subscription } from 'rxjs';

import { LoginResponse, User, UserRoutes } from '../../models/auth.models';
import { getAuthState, getLoggedInUser, getLoggedInUserRoutes, getLogin } from '../../store/authentication/auth.selector';
import { Router } from '@angular/router';
import { logout } from '../../store/authentication/auth.actions';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  getUserSubscription$:Subscription = new Subscription();
  getuser$:Observable<User> = new Observable<User>();
  getuserRoutes$:Observable<UserRoutes[]> = new Observable<UserRoutes[]>();

  adminRoutes = [
    {title:'Users', route:'/dashboard/admin'}
  ]
  isCollapsed = true;
  constructor(private store:Store<AppState>, private router:Router){
   this.getuser$ = this.store.select(getLoggedInUser)
   this.getuserRoutes$ = this.store.select(getLoggedInUserRoutes)
  }

  naviagteOnClick(route:any){
      this.router.navigateByUrl(route)
  }

  logout(){
    this.store.dispatch(logout())
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }

}
