import { Injectable } from '@angular/core';
import { Router, RoutesRecognized } from '@angular/router';
import { filter, pairwise } from 'rxjs';
import { getLoggedInUser, getLoggedInUserRoutes, getLogin } from '../store/authentication/auth.selector';

@Injectable({
  providedIn: 'root'
})
export class PermissionsService {

  previousUrl: string;

  constructor(private router: Router) {
      this.previousUrl = ""

  }



  clearSelectorMemoizedValues(){
    getLogin.release();
    getLoggedInUser.release();
    getLoggedInUserRoutes.release()
  }
}
