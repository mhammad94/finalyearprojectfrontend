import { Injectable } from '@angular/core';
import { Router, RoutesRecognized } from '@angular/router';
import { filter, pairwise } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PermissionsService {

  previousUrl: string;

  constructor(private router: Router) {
      this.previousUrl = ""

  }



  hasRequiredAccess(route:string){

  }
}
