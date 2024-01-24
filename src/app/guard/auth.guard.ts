import { inject } from '@angular/core';
import { ActivatedRoute, CanActivateFn, NavigationEnd, Route, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { filter } from 'rxjs';
import { AppState } from '../store/app.state';
import { getLoggedInUserRoutesForGuard, getLogin } from '../store/authentication/auth.selector';



export const authGuard: CanActivateFn = (route, state) => {
  let token
  let appState = inject(Store<AppState>)
  const router = inject(Router)
  let userRoutes:string[]
  let currentRoute;
  debugger
  router.events.pipe(
    filter(event => event instanceof NavigationEnd)
  )
  .subscribe((data) => {
    currentRoute = router.url
    localStorage.setItem('previousRoute', currentRoute)
  })

  appState.select(getLogin).subscribe(res => {
    token = res?.token
  })

  appState.select(getLoggedInUserRoutesForGuard).subscribe(res => {
    userRoutes = res;
  })


  if(!currentRoute){
    currentRoute = localStorage.getItem('previousRoute')
  }
  if(token){
    return true
  }else{
    router.navigateByUrl('/auth/login')
    return false;
  }
};
