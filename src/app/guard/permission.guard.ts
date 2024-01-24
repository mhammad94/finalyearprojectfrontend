import { CanActivateFn, Router } from '@angular/router';
import { AppState } from '../store/app.state';
import { inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { getLoggedInUserRoutesForGuard } from '../store/authentication/auth.selector';

export const permissionGuard: CanActivateFn = (route, state) => {

  let userRoutes:string[]
  let appState = inject(Store<AppState>)
  let currentRoute;
  const router = inject(Router)

  appState.select(getLoggedInUserRoutesForGuard).subscribe(res => {
    userRoutes = res;
  })

  currentRoute = localStorage.getItem('previousRoute')

  if(userRoutes?.includes(state.url)){
    return true;
  }else{
      router.navigateByUrl(currentRoute)
  }

  return true;
};
