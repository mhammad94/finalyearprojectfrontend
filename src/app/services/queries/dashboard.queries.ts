import { gql } from "apollo-angular";


export const getAllTopicsQuery = gql`
query GetAllTopics{
  getAllTopics{
    ok,
    errors,
    successMessage,
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
