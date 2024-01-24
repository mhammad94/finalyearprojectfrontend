import { createReducer, on } from "@ngrx/store";
import { login, loginFailure, loginSuccess, logoutSuccess } from "./auth.actions";
import { LoginResponse } from "../../models/auth.models";




export interface AuthState {
  login:LoginResponse | undefined
}


export const initialState:AuthState = {
  login:undefined
}


const _authReducer = createReducer(
  initialState,

  on(loginSuccess, (state, action) => {
    return{
      ...state,
      login:action.data
    }
  }),

  on(loginFailure, (state, action) => {
    return{
      ...state,
      login:action.data
    }
  }),

  on(logoutSuccess, (state, action) => {
    return{
      ...state,
      login:undefined
    }
  }),


  );


export function authReducer(state:any, action:any){
  return _authReducer(state, action)
}
