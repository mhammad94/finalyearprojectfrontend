import { createReducer, on } from "@ngrx/store";
import { User } from "../../models/auth.models";
import {  DashboardActionTypes, getAllTopicsSuccess, getNormalUsersSucess, getUsersForApproval, getUsersForApprovalFailure, getUsersForApprovalSucess } from "./dashboard.actions";
import { Topic } from "../../models/dashboard.model";




export interface DashboardState{
  usersForApproval: User[] | []
  topics:Topic[] | []
  normalUsers:User[] | []
}


export const initialState:DashboardState = {
  usersForApproval:[],
  topics:[],
  normalUsers:[]
}



const _dashboardReducer = createReducer(
  initialState,
  on(getUsersForApprovalSucess, (state, action) => {
    return{
      ...state,
      usersForApproval:action.data.users
    }
  }),
  on(getAllTopicsSuccess, (state, action) => {
    return {
      ...state,
      topics:action.data.topics
    }
  }),
  on(getNormalUsersSucess, (state, action) => {
    return {
      ...state,
      normalUsers:action.data.users
    }
  })

)



export function dashboardReducer(state:any, action:any){
  return _dashboardReducer(state, action)
}
