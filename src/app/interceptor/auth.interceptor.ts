import { HttpErrorResponse, HttpHandlerFn, HttpInterceptorFn, HttpRequest } from "@angular/common/http";
import { inject } from "@angular/core";
import { AppState } from "../store/app.state";
import { Store } from "@ngrx/store";
import { getAuthState, getLogin } from "../store/authentication/auth.selector";
import { catchError, throwError } from "rxjs";
import { logout } from "../store/authentication/auth.actions";



export const authInterceptor:HttpInterceptorFn = (req: HttpRequest<unknown>,  next: HttpHandlerFn) => {
  debugger
  let appState = inject(Store<AppState>)
  let token;

  appState.select(getLogin).subscribe(res => {

    token = res?.token
  })


  if((token === undefined) || (token === null)){
    token = ''
  }

  const clonnedRequest = req.clone({
    setHeaders:{
      Authorization:`JWT ${token}`
    }
  })
  return next(clonnedRequest).pipe(
    catchError((error:HttpErrorResponse) => {
      if(error.status === 401 && error.error.errors.length > 0){
        appState.dispatch(logout())
      }
      return throwError(() => '')
    })
  )
}
