import { createReducer, on } from "@ngrx/store";
import { User } from "../../models/auth.models";
import {  DashboardActionTypes, getAllFilterKeyWordsSuccess, getAllTopicsSuccess, getNormalUsersSucess, getUsersForApproval, getUsersForApprovalFailure, getUsersForApprovalSucess } from "./dashboard.actions";
import { FilterKeyWords, Topic } from "../../models/dashboard.model";




export interface DashboardState{
  usersForApproval: User[] | []
  topics:Topic[] | []
  normalUsers:User[] | []
  filterKeyWords:FilterKeyWords[] | [] | string[]
}


export const initialState:DashboardState = {
  usersForApproval:[],
  topics:[],
  normalUsers:[],
  filterKeyWords:[]
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
      topics:action.data.topics,
      filterKeyWords:action.data.filterKeywords
    }
  }),
  on(getNormalUsersSucess, (state, action) => {
    return {
      ...state,
      normalUsers:action.data.users
    }
  }),
  on(getAllFilterKeyWordsSuccess, (state, action) => {
    return{
      ...state,
      filterKeyWords:action.data.filterKeywords
    }
  })

)



export function dashboardReducer(state:any, action:any){
  return _dashboardReducer(state, action)
}
