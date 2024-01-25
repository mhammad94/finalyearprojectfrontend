import { gql } from "apollo-angular";


export const getAllTopicsQuery = gql`
query GetAllTopics{
  getAllTopics{
    ok,
    errors,
    successMessage,
    filterKeywords,
    topics{
      id,
      createdAt,
      title,
      content,
      user{
        id,
        firstName,
        lastName
      }
      commentsCount,
      comments{
        id,
        content,
        user{
          id,
          firstName,
          lastName
        }
      }
    }
  }
}
`


export const gettAllFilterKeyWordsQuery =  gql`
query GetAllFilterKeyWords{
  getAllFilterKeywords{
    ok,
    errors,
    successMessage,
    filterKeywords{
      id,
      keyWord
    }
  }
}
`
