import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { DashboardState } from "./dashboard.reducer";
import moment from "moment";



export const getDashboardState = createFeatureSelector<AppState>('dashboard');


export const getUsersForApprovalState = createSelector(getDashboardState, (state:any) => {
  console.log(state.usersForApproval)
  return state.usersForApproval.map((user) => {
    return {
      dateJoined:moment(user.dateJoined).format('MMM Do YY'),
      email:user.email,
      firstName:user.firstName,
      id:user.id,
      isApproved:user.isApproved,
      lastName:user.lastName,
      userRoutes:user.userRoutes,
      userType:user.userType,
      userTypeDisplay:user.userTypeDisplay
    }
  })
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
  let topics =  state.topics.map((topic) => {
    return {
      id:topic.id,
      content:topic.content,
      creationDate:topic.creationDate,
      title:topic.title,
      active:false,
      comments:topic.comments,
      commentsCount:topic.commentsCount
    }
  })
  let selectedPannel = localStorage.getItem('clickedPannel')

  if(selectedPannel){
   let topic = topics.find(x => x.id === selectedPannel);

   if(topic){
      topic.active = true;
   }
  }


  return topics




})


export const getAllFilterKeyWordsState = createSelector(getDashboardState, (state:any) => {
  return state.filterKeyWords
})
