import { BaseResponse } from "./baseresponse.models"


export interface LoginResponse extends BaseResponse{
  token:string
  user:User
}


export interface UsersForApprovalResponse extends BaseResponse{
  users:User[]
}



export interface User{
  id:string,
  firstName:string,
  lastName:string,
  email:string,
  isApproved:boolean,
  userType:string,
  dateJoined:string,
  userTypeDisplay?:string
  userRoutes?:UserRoutes[]
}


export interface UserRoutes{
  route:string,
  routeTitle:string
}

export interface LoginProps{
  email:string,
  password:string
}


export interface RegisterUserProps{
  firstName:string,
  lastName:string,
  email:string,
  password:string
}


export interface BanUserProps{
  userId:string,
  isBanned:boolean,
  banStartDate?:any,
  banEndDate?:any
}


export interface ApproveBlockUserProps{
  id:string,
  approved:boolean
}
