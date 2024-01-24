import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, NavigationEnd, NavigationStart, Router, RoutesRecognized } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.state';
import { filter, pairwise } from 'rxjs';
import { getLoggedInUserRoutes, getLoggedInUserRoutesForGuard, getLogin } from '../store/authentication/auth.selector';
import { PermissionsService } from '../services/permissions.service';

export const loggedinGuard: CanActivateFn = (route, state) => {
  let appState = inject(Store<AppState>);
  const router = inject(Router)
  const activatedRoute = inject(PermissionsService)
  let token = localStorage.getItem('token');
  let previousRoute = localStorage.getItem('previousRoute') ? localStorage.getItem('previousRoute') : ''


  if(token){
    router.navigateByUrl(previousRoute)
    return false;
  }else{
    return true;
  }
};
