import { createAction, props } from "@ngrx/store";
import { ApproveBlockUserProps, UsersForApprovalResponse } from "../../models/auth.models";
import { BaseResponse } from "../../models/baseresponse.models";
import { FilterKeyWordsResponse, TopicsResponse } from "../../models/dashboard.model";


export enum DashboardActionTypes{
  GET_USERS_FOR_APPROVAL_ACTION = "[DASHBOARD] Get Users For Approval",
  GET_USERS_FOR_APPROVAL_SUCCESS_ACTION = "[DASHBOARD] Get Users For Approval Success",
  GET_USERS_FOR_APPROVAL_FAILURE_ACTION = "[DASHBOARD] Get Users For Approval Failure",
  SET_APPROVE_BLOCK_USER_ACTION = "[DASHBOARD] Set Users For Approval Or Block",
  SET_APPROVE_BLOCK_USER_SUCCESS_ACTION = "[DASHBOARD] Set Users For Approval Or Block Suceess",
  SET_APPROVE_BLOCK_USER_FAILURE_ACTION = "[DASHBOARD] Set Users For Approval Or Block Failure",
  ADD_NEW_TOPIC_ACTION = "[DASHBOARD] Add New Topic",
  ADD_NEW_TOPIC_ACTION_SUCCESS = "[DASHBOARD] Add New Topic Success",
  ADD_NEW_TOPIC_ACTION_FAILURE = "[DASHBOARD] Add New Topic Failure",
  GET_ALL_TOPICS_ACTION = "[DASHBOARD] Get All Topics",
  GET_ALL_TOPICS_ACTION_SUCCESS = "[DASHBOARD] Get All Topics Success",
  GET_ALL_TOPICS_ACTION_FAILURE = "[DASHBOARD] Get All Topics Failure",
  ADD_NEW_COMMENT_ACTION = "[DASHBOARD] Add New Comment",
  ADD_NEW_COMMENT_ACTION_SUCCESS = "[DASHBOARD] Add New Comment Success",
  ADD_NEW_COMMENT_ACTION_FAILURE = "[DASHBOARD] Add New Comment Failure",
  DELETE_COMMENT_ACTION = "[DASHBOARD] Delete Comment",
  DELETE_COMMENT_ACTION_SUCCES = "[DASHBOARD] Delete Comment Success",
  DELETE_COMMENT_ACTION_FAILURE = "[DASHBOARD] Delete Comment Failure",
  DELETE_TOPIC_ACTION = "[DASHBOARD] Delete Topic",
  DELETE_TOPIC_ACTION_SUCCES = "[DASHBOARD] Delete Topic Success",
  DELETE_TOPIC_ACTION_FAILURE = "[DASHBOARD] Delete Topic Failure",
  GET_NORMAL_USER_ACTION = "[DASHBOARD] Get Normal Users",
  GET_NORMAL_USER_SUCCESS_ACTION = "[DASHBOARD] Get Normal Users Success",
  GET_NORMAL_USER_FAILURE_ACTION = "[DASHBOARD] Get Normal Users Failure",
  ADD_FILTER_KEYWORD_ACTION = "[DASHBOARD] Add Filter Keyword",
  ADD_FILTER_KEYWORD_ACTION_SUCCESS = "[DASHBOARD] Add Filter Keyword Success",
  ADD_FILTER_KEYWORD_ACTION_FAILURE = "[DASHBOARD] Add Filter Keyword Failure",
  DELETE_FILTER_KEYWORD_ACTION = "[DASHBOARD] Delete Filter Keyword",
  DELETE_FILTER_KEYWORD_ACTION_SUCCESS = "[DASHBOARD] Delete Filter Keyword Success",
  DELETE_FILTER_KEYWORD_ACTION_FAILURE = "[DASHBOARD] Delete Filter Keyword Failure",
  GET_FILTER_KEYWORDS = "[DASHBOARD] Get Filter Keywords",
  GET_FILTER_KEYWORDS_SUCCESS = "[DASHBOARD] Get Filter Keywords Success",
  GET_FILTER_KEYWORDS_FAILURE = "[DASHBOARD] Get Filter Keywords Failure",
}




export const getUsersForApproval = createAction(DashboardActionTypes.GET_USERS_FOR_APPROVAL_ACTION)

export const getUsersForApprovalSucess = createAction(
  DashboardActionTypes.GET_USERS_FOR_APPROVAL_SUCCESS_ACTION,
  props<{data:UsersForApprovalResponse}>())

export const getUsersForApprovalFailure = createAction(
  DashboardActionTypes.GET_USERS_FOR_APPROVAL_FAILURE_ACTION,
  props<{data:UsersForApprovalResponse}>())



  export const getNormalUsers = createAction(DashboardActionTypes.GET_NORMAL_USER_ACTION)

  export const getNormalUsersSucess = createAction(
    DashboardActionTypes.GET_NORMAL_USER_SUCCESS_ACTION,
    props<{data:UsersForApprovalResponse}>())

  export const getNormalUsersFailure = createAction(
    DashboardActionTypes.GET_NORMAL_USER_FAILURE_ACTION,
    props<{data:UsersForApprovalResponse}>())


export const setUsersForApproval = createAction(
  DashboardActionTypes.SET_APPROVE_BLOCK_USER_ACTION,
  props<{id:string, approved:boolean}>())

export const setUsersForApprovalSuccess = createAction(
    DashboardActionTypes.SET_APPROVE_BLOCK_USER_SUCCESS_ACTION,
    props<{data:BaseResponse}>())

export const setUsersForApprovalFailure = createAction(
  DashboardActionTypes.SET_APPROVE_BLOCK_USER_FAILURE_ACTION,
  props<{data:BaseResponse}>())

export const addNewComment = createAction(
  DashboardActionTypes.ADD_NEW_COMMENT_ACTION,
  props<{topicId:string, content:string}>())


export const addNewCommentSuccess = createAction(
    DashboardActionTypes.ADD_NEW_COMMENT_ACTION_SUCCESS,
    props<{data:BaseResponse}>()
)

  export const addNewCommentFailure = createAction(
    DashboardActionTypes.ADD_NEW_COMMENT_ACTION_FAILURE,
    props<{data:BaseResponse}>()
)

export const getAllTopics = createAction(DashboardActionTypes.GET_ALL_TOPICS_ACTION)

export const getAllTopicsSuccess = createAction(
  DashboardActionTypes.GET_ALL_TOPICS_ACTION_SUCCESS,
   props<{data:TopicsResponse}>()
  )


export const getAllTopicsFailure = createAction(
  DashboardActionTypes.GET_ALL_TOPICS_ACTION_FAILURE,
    props<{data:TopicsResponse}>()
  )


export const addNewTopic = createAction(
  DashboardActionTypes.ADD_NEW_TOPIC_ACTION,
  props<{title:string, content:string}>())


export const addNewTopicSuccess = createAction(
    DashboardActionTypes.ADD_NEW_TOPIC_ACTION_SUCCESS,
    props<{data:BaseResponse}>()
)

  export const addNewTopicFailure = createAction(
    DashboardActionTypes.ADD_NEW_TOPIC_ACTION_FAILURE,
    props<{data:BaseResponse}>()
)



export const deleteComment = createAction(DashboardActionTypes.DELETE_COMMENT_ACTION, props<{commentId:string}>())

export const deleteCommentSuccess = createAction(
  DashboardActionTypes.DELETE_COMMENT_ACTION_SUCCES,
  props<{data:BaseResponse}>())

export const deleteCommentFailure = createAction(
  DashboardActionTypes.DELETE_COMMENT_ACTION_FAILURE,
  props<{data:BaseResponse}>())


export const deleteTopic = createAction(DashboardActionTypes.DELETE_TOPIC_ACTION, props<{topicId:string}>())

export const deleteTopicSuccess = createAction(
DashboardActionTypes.DELETE_TOPIC_ACTION_SUCCES,
props<{data:BaseResponse}>())

export const deleteTopicFailure = createAction(
DashboardActionTypes.DELETE_TOPIC_ACTION_FAILURE,
props<{data:BaseResponse}>())



export const addFilterKeyWord = createAction(DashboardActionTypes.ADD_FILTER_KEYWORD_ACTION, props<{keyword:string}>())
export const addFilterKeyWordSuccess = createAction(DashboardActionTypes.ADD_FILTER_KEYWORD_ACTION_SUCCESS,
props<{data:BaseResponse}>()
)
export const addFilterKeyWordFailure = createAction(DashboardActionTypes.ADD_FILTER_KEYWORD_ACTION_FAILURE,
props<{data:BaseResponse}>()
)


export const deleteFilterKeyWord = createAction(DashboardActionTypes.DELETE_FILTER_KEYWORD_ACTION, props<{keywordId:string}>())
export const deleteFilterKeyWordSuccess = createAction(DashboardActionTypes.DELETE_FILTER_KEYWORD_ACTION_SUCCESS,
props<{data:BaseResponse}>()
)
export const deleteFilterKeyWordFailure = createAction(DashboardActionTypes.DELETE_FILTER_KEYWORD_ACTION_FAILURE,
props<{data:BaseResponse}>()
)



export const getAllFilterKeyWords = createAction(DashboardActionTypes.GET_FILTER_KEYWORDS)

export const getAllFilterKeyWordsSuccess = createAction(
  DashboardActionTypes.GET_FILTER_KEYWORDS_SUCCESS,
   props<{data:FilterKeyWordsResponse}>()
  )


export const getAllFilterKeyWordsFailure = createAction(
  DashboardActionTypes.GET_FILTER_KEYWORDS_FAILURE,
    props<{data:FilterKeyWordsResponse}>()
  )
