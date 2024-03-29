import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { getUsersForApprovalQuery } from './queries/auth.quries';
import { map } from 'rxjs';
import { addFilterKeyWord, deleteComment, deleteKeyWord, deleteTopic, newCommentMutation, newTopicMutation } from './mutations/dashboard.mutations';
import { getAllTopicsQuery, gettAllFilterKeyWordsQuery } from './queries/dashboard.queries';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private apollo: Apollo) { }


  getUserForApproval(){
    return this.apollo.watchQuery({
      query:getUsersForApprovalQuery,
      fetchPolicy: 'network-only',
    })
    .valueChanges
    .pipe(map((result:any) => result.data.getUsersForApproval))
  }


  addNewTopic(payload:any){
    const { title, content} = payload;

    return this.apollo.mutate({
      mutation:newTopicMutation,
      variables:{
        title:title,
        content:content
      },
      refetchQueries:[getAllTopicsQuery]
    })
    .pipe(map((result:any) => result.data.addNewTopic))
  }

  getAllTopics(){
    return this.apollo.watchQuery({
      query:getAllTopicsQuery,
      fetchPolicy: 'network-only',
    })
    .valueChanges
    .pipe(map((result:any) => result.data.getAllTopics))
  }

  addNewComment(payload){
    let {content, topicId} = payload
    return this.apollo.mutate({
      mutation:newCommentMutation,
      variables:{
        content:content,
        topicId:topicId
      },
      refetchQueries:[getAllTopicsQuery]
    })
    .pipe(map((result:any) => result.data.addNewComment))
  }


  deleteComment(payload){
    let {commentId} = payload

    return this.apollo.mutate({
      mutation:deleteComment,
      variables:{
        commentId:commentId,
      },
      refetchQueries:[getAllTopicsQuery]
    })
    .pipe(map((result:any) => result.data.deleteComment))
  }

  deleteTopic(payload){
    let { topicId} = payload;

    return this.apollo.mutate({
      mutation:deleteTopic,
      variables:{
        topicId:topicId
      },
      refetchQueries:[getAllTopicsQuery]
    })
    .pipe(map((result:any) => result.data.deleteTopic))
  }


  addNewKeyWord(payload){
    const { keyword } = payload
    return this.apollo.mutate({
      mutation:addFilterKeyWord,
      variables:{
        keyword:keyword
      },
      refetchQueries:[gettAllFilterKeyWordsQuery]
    })
    .pipe(map((result:any) => result.data.addKeyWord))
  }

  deleteKeyWord(payload){
    const { keywordId } = payload
    return this.apollo.mutate({
      mutation:deleteKeyWord,
      variables:{
        keywordId:keywordId
      },
      refetchQueries:[gettAllFilterKeyWordsQuery]
    })
    .pipe(map((result:any) => result.data.deleteKeyWord))
  }

  getAllFilterKeyWords(){
    return this.apollo.watchQuery({
      query:gettAllFilterKeyWordsQuery,
      fetchPolicy: 'network-only',
    })
    .valueChanges
    .pipe(map((result:any) => result.data.getAllFilterKeywords))
  }
}
