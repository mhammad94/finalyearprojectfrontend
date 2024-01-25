import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AuthService } from "../../services/auth.service";
import { banUser, banUserFailure, banUserSuccess, login, loginFailure, loginSuccess, logout, logoutFailure, logoutSuccess, registerModerator, registerModeratorFailure, registerModeratorSuccess, registerNormalUser, registerNormalUserFailure, registerNormalUserSuccess } from "./auth.actions";
import { exhaustMap, map, switchMap, tap } from "rxjs";
import { NzMessageService } from "ng-zorro-antd/message";
import { Router } from "@angular/router";
import { RegisterUserProps } from "../../models/auth.models";
import { UserTypesEnum } from "../../enums/user.enums";
import { getLogin } from "./auth.selector";


@Injectable()
export class AuthEffects{

  constructor(private actions$:Actions,
    private authService:AuthService,
    private message: NzMessageService,
    private router:Router){}



  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(login),
      exhaustMap((action) => {
        return this.authService.login(action).pipe(map((data) => {
          debugger
          if(data.ok){
            return loginSuccess({data:data})
          }else{
            return loginFailure({data:data})
          }

        }))
      })
    )
  })


  loginSucess$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loginSuccess),
      tap((action:any) => {
        debugger
        let response = action.data;
        if(response.ok){
            let user = response.user;
            localStorage.setItem('token', response.token)
            localStorage.setItem('authData', JSON.stringify(response))
            if(user.userType === UserTypesEnum.ADMIN){
                this.router.navigateByUrl('dashboard/admin')
            }

            if((user.userType === UserTypesEnum.MODERATOR) || (user.userType === UserTypesEnum.NORMAULUSER)){
              this.router.navigateByUrl('/dashboard/forum')
            }

        }
      })
    )
  }, {dispatch:false})

  loginFailure$ = createEffect(() => {
   return this.actions$.pipe(
    ofType(loginFailure),
    tap((action:any) => {
      debugger
      let response = action.data;

          this.message.error(action.data.errors)
    })
   )
  },{dispatch:false})


  registerModerator$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(registerModerator),
      exhaustMap((action) => {
        return this.authService.registerModerator(action).pipe(map((data) => {
          if(data.ok){
            return registerModeratorSuccess(data)
          }else{
            return registerModeratorFailure(data)
          }

        }))
      })
    )
  })

  registerModeratorSuccess$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(registerModeratorSuccess),
      tap((action:any) => {
        if(action.ok){
          this.message.success(action.successMessage)
        }

      })
    )
  },{dispatch:false})


  registerModeratorFailure$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(registerModeratorFailure),
      tap((action:any) => {
        if(!action.ok){
          this.message.error(action.errors)
        }

      })
    )
  },{dispatch:false})

  logout$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(logout),
      exhaustMap((action) => {
        return this.authService.logout().pipe(
          map((data) => {
            if(data.ok){
              return logoutSuccess({data:data})
            }else{
              return logoutFailure({data:data})
            }
          })
        )
      })
    )
  })

  logOutSuccess$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(logoutSuccess),
      tap((action) => {
        localStorage.clear()
        getLogin.release()
        localStorage.setItem('previousRoute', '/auth/login')
        this.router.navigateByUrl('/auth/login')
      })
    )
  },{dispatch:false})

  logOutFailure = createEffect(() => {
    return this.actions$.pipe(
      ofType(logoutFailure),
      tap((action) => {
        this.message.error(action.data.errors)
      })
    )
  },{dispatch:false})


  registerNormalUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(registerNormalUser),
      exhaustMap((action) => {
        return this.authService.registerNormalUser(action).pipe(map((data) => {
          if(data.ok){
            return registerModeratorSuccess(data)
          }else{
            return registerModeratorFailure(data)
          }

        }))
      })
    )
  })

  registerNormalUserSuccess$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(registerNormalUserSuccess),
      tap((action:any) => {
        if(action.ok){
          this.message.success(action.successMessage)
          this.router.navigateByUrl('/auth/login')
        }

      })
    )
  },{dispatch:false})


  registerNormalUserFailure$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(registerNormalUserFailure),
      tap((action:any) => {
        if(!action.ok){
          this.message.error(action.errors)
        }

      })
    )
  },{dispatch:false})


  banUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(banUser),
      exhaustMap((action) => {
        return this.authService.banUser(action.data).pipe(map((data) => {
          if(data.ok){
            return banUserSuccess(data)
          }else{
            return banUserFailure(data)
          }

        }))
      })
    )
  })

  banUserSuccess$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(banUserSuccess),
      tap((action:any) => {
        if(action.ok){
          this.message.success(action.successMessage)
        }

      })
    )
  },{dispatch:false})


  banUserFailure$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(banUserFailure),
      tap((action:any) => {
        if(!action.ok){
          this.message.error(action.errors)
        }

      })
    )
  },{dispatch:false})
}
