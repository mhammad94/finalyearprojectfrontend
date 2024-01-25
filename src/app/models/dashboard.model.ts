import { User } from "./auth.models";
import { BaseResponse } from "./baseresponse.models";





export interface TopicsResponse extends BaseResponse{
  topics:Topic[],
  filterKeywords:FilterKeyWords[]
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

export interface FilterKeyWords {
  id:string,
  keyWord:string,
}


export interface FilterKeyWordsResponse extends BaseResponse{
  filterKeywords:FilterKeyWords[]
}
