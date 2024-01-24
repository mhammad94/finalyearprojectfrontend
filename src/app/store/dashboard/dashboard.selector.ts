import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { DashboardState } from "./dashboard.reducer";
import moment from "moment";



export const getDashboardState = createFeatureSelector<AppState>('dashboard');


export const getUsersForApprovalState = createSelector(getDashboardState, (state:any) => {
  return state.usersForApproval
}
)

export const getNormalUsersState = createSelector(getDashboardState, (state:any) => {
  return state.normalUsers.map((user) => {
    return {
      id:user.id,
      firstName:user.firstName,
      lastName:user.lastName,
      email:user.email,
      isUserBanned:user.isUserBanned,
      banStartDate: moment(user.banStartDate).format('MMM Do YY'),
      banEndDate:moment(user.banEndDate).format('MMM Do YY')
    }
  })
}
)

export const getAllTopicsState = createSelector(getDashboardState, (state:any) => {
  return state.topics.map((topic) => {
    return {
      id:topic.id,
      content:topic.content,
      creationDate:topic.creationDate,
      title:topic.title,
      active:true,
      comments:topic.comments,
      commentsCount:topic.commentsCount
    }
  })
})
