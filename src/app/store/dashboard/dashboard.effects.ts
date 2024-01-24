import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { NzMessageService } from "ng-zorro-antd/message";
import { DashboardActionTypes, addNewComment, addNewCommentFailure, addNewCommentSuccess, addNewTopic, addNewTopicFailure, addNewTopicSuccess, deleteComment, deleteCommentFailure, deleteCommentSuccess, deleteTopic, deleteTopicFailure, deleteTopicSuccess, getAllTopics, getAllTopicsFailure, getAllTopicsSuccess, getNormalUsers, getNormalUsersFailure, getNormalUsersSucess, getUsersForApproval, getUsersForApprovalFailure, getUsersForApprovalSucess,setUsersForApproval, setUsersForApprovalFailure, setUsersForApprovalSuccess } from "./dashboard.actions";
import { exhaustMap, map, mergeMap, of, switchMap, tap } from "rxjs";
import { DashboardService } from "../../services/dashboard.service";
import { AuthService } from "../../services/auth.service";




@Injectable()
export class DashboardEffects{

  constructor(
    private actions$:Actions,
    private authService:AuthService,
    private message: NzMessageService,
    private dashboardService:DashboardService
    ){}




  getUsersForApproval$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getUsersForApproval),
      switchMap((action) => {
        return this.dashboardService.getUserForApproval().pipe(
          map((data:any) => {
            if(data.ok){
              return getUsersForApprovalSucess({data:data})
            }else{
              return getUsersForApprovalFailure({data:data})
            }
          })
        )
      })
    )
  })

  getUsersForApprovalSuccess$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getUsersForApprovalSucess)
    )
  },{dispatch:false})

  getUsersForApprovalFailure$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getUsersForApprovalFailure),
      tap((action:any) => {
        if(!action.ok){
            this.message.error(action.errors)
        }
      })
    )
  },{dispatch:false})


  getNormalUsers$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getNormalUsers),
      switchMap((action) => {
        return this.authService.getNormalUsers().pipe(
          map((data:any) => {
            if(data.ok){
              return getNormalUsersSucess({data:data})
            }else{
              return getNormalUsersFailure({data:data})
            }
          })
        )
      })
    )
  })

  getNormalUsersSuccess$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getNormalUsersSucess)
    )
  },{dispatch:false})

  getNormalUsersFailure$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getNormalUsersFailure),
      tap((action:any) => {
        if(!action.ok){
            this.message.error(action.errors)
        }
      })
    )
  },{dispatch:false})


  setUsersForApproval$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(setUsersForApproval),
      switchMap((action) => {
          return this.authService.approvedBlockUser(action).pipe(
            map((data:any) => {
                if(data.ok){
                  return setUsersForApprovalSuccess(data)
                }else{
                  return setUsersForApprovalFailure(data)
                }
            })
          )
      })
    )
  })

  setUsersForApprovalSuccess$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(setUsersForApprovalSuccess),
      tap((action:any) => {
        if(action.ok){

          this.message.success(action.successMessage)
        }
      })
    )
  },{dispatch:false})

  setUsersForApprovalFailure$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(setUsersForApprovalFailure),
      tap((action:any) => {
        if(!action.ok){
            this.message.error(action.errors)
        }
      })
    )
  },{dispatch:false})




  addNewTopic$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(addNewTopic),
      switchMap((action) => {
        return this.dashboardService.addNewTopic(action).pipe(
          map((data:any) => {
            if(data.ok){
              return addNewTopicSuccess(data)
            }else{
              return addNewTopicFailure(data)
            }
          })
        )
      })
    )
  })

  addNewTopicSuccess$ = createEffect(() => {
   return this.actions$.pipe(
      ofType(addNewTopicSuccess),
      tap((action:any) => {
        if(action.ok){
          this.message.success(action.successMessage)
        }
      })
    )

  },{dispatch:false})

  addNewTopicFailure$ = createEffect(() => {
    return this.actions$.pipe(
       ofType(addNewTopicFailure),
       tap((action:any) => {
         if(!action.ok){
           this.message.error(action.errors)
         }
       })
     )

   },{dispatch:false})


   addNewComment$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(addNewComment),
      switchMap((action) => {
        return this.dashboardService.addNewComment(action).pipe(
          map((data:any) => {
            if(data.ok){
              return addNewCommentSuccess(data)
            }else{
              return addNewCommentFailure(data)
            }
          })
        )
      })
    )
  })

  addNewCommentSuccess$ = createEffect(() => {
   return this.actions$.pipe(
      ofType(addNewCommentSuccess),
      tap((action:any) => {
        if(action.ok){
          this.message.success(action.successMessage)
        }
      })
    )

  },{dispatch:false})

  addNewCommentFailure$ = createEffect(() => {
    return this.actions$.pipe(
       ofType(addNewCommentFailure),
       tap((action:any) => {
         if(!action.ok){
           this.message.error(action.errors)
         }
       })
     )

   },{dispatch:false})



  gettAllTopics$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getAllTopics),
      switchMap((actions) => {
        debugger
        return this.dashboardService.getAllTopics().pipe(
          map((data:any) => {
            if(data.ok){
              return getAllTopicsSuccess({data:data})
            }else{
              return getAllTopicsFailure({data:data})
            }
          })
        )
      })
    )
  })

  getAllTopicsSuccess$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getAllTopicsSuccess),
    )
  },{dispatch:false})

  getAllTopicsFailure = createEffect(() => {
    return this.actions$.pipe(
      ofType(getAllTopicsFailure),
      tap((data:any) => {
         if(!data.ok){
            this.message.error(data.errors)
         }
      })
    )
  },{dispatch:false})



  deleteComment$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(deleteComment),
      switchMap((action) => {
        return this.dashboardService.deleteComment(action).pipe(
          map((data:any) => {
            if(data.ok){
              return deleteCommentSuccess(data)
            }else{
              return addNewCommentFailure(data)
            }
          })
        )
      })
    )
  })

  deleteCommentSuccess$ = createEffect(() => {
   return this.actions$.pipe(
      ofType(deleteCommentSuccess),
      tap((action:any) => {
        if(action.ok){
          this.message.success(action.successMessage)
        }
      })
    )

  },{dispatch:false})

  deleteCommentFailure$ = createEffect(() => {
    return this.actions$.pipe(
       ofType(deleteCommentFailure),
       tap((action:any) => {
         if(!action.ok){
           this.message.error(action.errors)
         }
       })
     )

   },{dispatch:false})



   deleteTopic$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(deleteTopic),
      switchMap((action) => {
        return this.dashboardService.deleteTopic(action).pipe(
          map((data:any) => {
            if(data.ok){
              return deleteTopicSuccess(data)
            }else{
              return deleteTopicFailure(data)
            }
          })
        )
      })
    )
  })

  deleteTopicSuccess$ = createEffect(() => {
   return this.actions$.pipe(
      ofType(deleteTopicSuccess),
      tap((action:any) => {
        if(action.ok){
          this.message.success(action.successMessage)
        }
      })
    )

  },{dispatch:false})

  deleteTopicFailure$ = createEffect(() => {
    return this.actions$.pipe(
       ofType(deleteTopicFailure),
       tap((action:any) => {
         if(!action.ok){
           this.message.error(action.errors)
         }
       })
     )

   },{dispatch:false})

}
