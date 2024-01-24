import { User } from "./auth.models";
import { BaseResponse } from "./baseresponse.models";





export interface TopicsResponse extends BaseResponse{
  topics:Topic[],
}


export interface Topic{
  id:string,
  creationDate:string,
  title:string,
  content:string,
  user:User,
  comments:Comment[]
  commentsCount:number
}


export interface Comment{
  id:string,
  content:string,
  user:User
}
