import { gql } from "apollo-angular";

export const loginMutation = gql`
mutation Login($email:String!, $password:String!){
  login(email:$email, password:$password){
    ok,
    errors,
    token,
    user{
      id,
      isApproved,
      email,
      firstName,
      lastName,
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

export const registerModeratorMutation = gql`
mutation SignupModeratorUser($email:String!, $password:String!, $firstName:String!,
  $lastName:String!){
    signupModeratorUser(email:$email, password:$password, firstName:$firstName, lastName:$lastName){
      ok,
      errors,
      successMessage
    }
  }
`

export const approveBlockUserMutation = gql`
mutation ApproveBlockUser($userId:UUID!, $approved:Boolean!){
  approveBlockUser(userId:$userId, approved:$approved){
    ok,
    errors,
    successMessage
  }
}
`

export const logOutMutation = gql`
mutation Logout{
  logout{
    ok,
    errors,
    successMessage
  }
}
`

export const registerNormalUser = gql`
mutation SignupNormalUser($email:String!, $password:String!, $firstName:String!,
  $lastName:String!){
    signupNormalUser(email:$email, password:$password, firstName:$firstName,
    lastName:$lastName){
      ok,
      errors,
      successMessage
    }
  }
`


export const banUserMutation = gql`
mutation BanUser($userId:UUID!, $isBanned:Boolean!, $banStartDate:String, $banEndDate:String){
  banUser(userId:$userId, isBanned:$isBanned, banStartDate:$banStartDate, banEndDate:$banEndDate){
    ok,
    errors,
    successMessage
  }
}
`
