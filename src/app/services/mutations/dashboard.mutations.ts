import { gql } from "apollo-angular";


export const newTopicMutation = gql`
mutation AddNewTopic($title:String!, $content:String!){
  addNewTopic(title:$title, content:$content){
    ok,
    errors,
    successMessage
  }
}
`


export const newCommentMutation = gql`
mutation AddNewComment($content:String!, $topicId:UUID!){
  addNewComment(content:$content, topicId:$topicId){
    ok,
    errors,
    successMessage
  }
}
`


export const deleteComment = gql`
mutation DeleteComment($commentId:UUID!){
  deleteComment(commentId:$commentId){
    ok,
    errors,
    successMessage
  }
}
`

export const deleteTopic = gql`
mutation DeleteTopic($topicId:UUID!){
  deleteTopic(topicId:$topicId){
    ok,
    errors,
    successMessage
  }
}
`
