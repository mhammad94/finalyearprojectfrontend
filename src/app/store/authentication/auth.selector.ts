import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState } from "../app.state";




export const getAuthState = createFeatureSelector<AppState>('auth');


export const getLogin = createSelector(getAuthState, (state:any) => {
  console.log("called")
  console.log(state)
  if(state.login !== undefined){
    return state.login
  }else{
    let localState = localStorage.getItem('authData');
    if(localState){
      localState = JSON.parse(localState);
      return localState
    }else{
      return undefined
    }
  }

})

export const getLoggedInUser = createSelector(getAuthState, (state:any) => {
    if(state.login !== undefined){
      return state.login.user
    }else{
      let localState:any = localStorage.getItem('authData');
      if(localState){
        localState = JSON.parse(localState);
        return localState.user
      }else{
        return undefined
      }
    }
})


export const getLoggedInUserRoutes = createSelector(getAuthState, (state:any) => {
  if(state.login !== undefined){
    return state.login.user.userRoutes
  }else{
    let localState:any = localStorage.getItem('authData');
    if(localState){
      localState = JSON.parse(localState);
      return localState.user.userRoutes
    }else{
      return undefined
    }
  }
})


export const getLoggedInUserRoutesForGuard = createSelector(getAuthState, (state:any) => {

  if(state.login !== undefined){
    return state.login.user.userRoutes.map((route) => {
      return '/' +route.route
    })
  }else{
    let localState:any = localStorage.getItem('authData');
    if(localState){
      localState = JSON.parse(localState);
      return localState.user.userRoutes.map((route) => {
        return '/' + route.route
      })
    }else{
      return undefined
    }
  }
})



export const getAuthToken = createSelector(getAuthState, (state:any) => {
  if(state.login !== undefined){
    return state.login.user.token
  }else{
    let localState:any = localStorage.getItem('authData');
    if(localState){
      localState = JSON.parse(localState);
      return localState.user.token
    }else{
      return '';
    }
  }
})

