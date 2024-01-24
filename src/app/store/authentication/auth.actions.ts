import { BanUserProps, RegisterUserProps } from './../../models/auth.models';
import { createAction, props } from "@ngrx/store";
import { LoginProps, LoginResponse } from "../../models/auth.models";
import { BaseResponse } from '../../models/baseresponse.models';





export enum AuthActionTypes{
  LOGIN_ACTION = '[AUTH] Login User',
  LOGIN_ACTION_SUCCESS = '[AUTH] Login User Success',
  LOGIN_ACTION_FAILURE = '[AUTH] Login User Failure',
  REGISTER_MODERATOR_ACTION = '[AUTH] Register Moderator',
  REGISTER_MODERATOR_SUCCESS_ACTION = '[AUTH] Register Moderator Success',
  REGISTER_MODERATOR_FAILURE_ACTION = '[AUTH] Register Moderator Failure',
  LOGOUT_ACTION = '[AUTH] Logout User Action',
  LOGOUT_ACTION_SUCCESS = '[AUTH] Logout User Action Success',
  LOGOUT_ACTION_FAILURE = '[AUTH] Logout User Action Failure',
  REGISTER_NORMAL_USER_ACTION = '[AUTH] Register Normal User',
  REGISTER_NORMAL_USER_SUCCESS_ACTION = '[AUTH] Register Normal User Success',
  REGISTER_NORMAL_USER_FAILURE_ACTION = '[AUTH] Register Normal User Failure',
  BAN_USER_ACTION = '[AUTH] Ban User',
  BAN_USER_SUCCESS_ACTION = '[AUTH] Ban User Success',
  BAN_USER_FAILURE_ACTION = '[AUTH] Ban User Failure',
}





export const login = createAction(AuthActionTypes.LOGIN_ACTION, props<{data:LoginProps}>())
export const loginSuccess = createAction(AuthActionTypes.LOGIN_ACTION_SUCCESS, props<{data:LoginResponse}>())
export const loginFailure = createAction(AuthActionTypes.LOGIN_ACTION_FAILURE, props<{data:LoginResponse}>())


export const registerModerator = createAction(AuthActionTypes.REGISTER_MODERATOR_ACTION, props<{data:RegisterUserProps}>())
export const registerModeratorSuccess = createAction(AuthActionTypes.REGISTER_MODERATOR_SUCCESS_ACTION, props<{data:BaseResponse}>())
export const registerModeratorFailure = createAction(AuthActionTypes.REGISTER_MODERATOR_FAILURE_ACTION, props<{data:BaseResponse}>())


export const logout = createAction(AuthActionTypes.LOGOUT_ACTION)
export const logoutSuccess = createAction(AuthActionTypes.LOGOUT_ACTION_SUCCESS,props<{data:BaseResponse}>())
export const logoutFailure = createAction(AuthActionTypes.LOGOUT_ACTION_FAILURE,props<{data:BaseResponse}>())


export const registerNormalUser = createAction(AuthActionTypes.REGISTER_NORMAL_USER_ACTION, props<{data:RegisterUserProps}>())
export const registerNormalUserSuccess = createAction(AuthActionTypes.REGISTER_NORMAL_USER_SUCCESS_ACTION, props<{data:BaseResponse}>())
export const registerNormalUserFailure = createAction(AuthActionTypes.REGISTER_NORMAL_USER_FAILURE_ACTION, props<{data:BaseResponse}>())


export const banUser = createAction(AuthActionTypes.BAN_USER_ACTION, props<{data:BanUserProps}>())
export const banUserSuccess = createAction(AuthActionTypes.BAN_USER_SUCCESS_ACTION, props<{data:BaseResponse}>())
export const banUserFailure = createAction(AuthActionTypes.BAN_USER_FAILURE_ACTION, props<{data:BaseResponse}>())
