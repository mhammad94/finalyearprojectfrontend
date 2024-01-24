import { gql } from "apollo-angular";


export const getUsersForApprovalQuery = gql`
query GetUsersForApproval{
  getUsersForApproval{
    	ok,
    	errors
    	users{
        id,
      	isApproved,
      	email,
      	firstName,
      	lastName,
    		dateJoined,
      	userType,
        userTypeDisplay,
        userRoutes{
          route,
          routeTitle
        }
      }

  }
}
`


export const getNoramlUsersQuery = gql`
query GetNormalUsers{
  getNormalUsers{
    ok,
    errors,
    users{
      id,
      firstName,
      lastName,
      email,
      isUserBanned,
      banStartDate,
      banEndDate,
      isApproved
    }
  }
}
`
