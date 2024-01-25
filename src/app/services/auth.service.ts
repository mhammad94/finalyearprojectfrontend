import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { approveBlockUserMutation, banUserMutation, logOutMutation, loginMutation, registerModeratorMutation, registerNormalUser } from './mutations/auth.mutations';
import { map, pipe } from 'rxjs';
import { RegisterUserProps } from '../models/auth.models';
import { getNoramlUsersQuery, getUsersForApprovalQuery } from './queries/auth.quries';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private apollo: Apollo) { }

  login(payload:any){
    const {email, password} = payload

    return this.apollo.mutate({
      mutation:loginMutation,
      fetchPolicy:'network-only',
      variables:{
        email:email,
        password:password
      }
    })
    .pipe(map((result:any) => result.data.login))
  }


  registerModerator(payload:any){
    return this.apollo.mutate({
      mutation:registerModeratorMutation,
      variables:{
        email:payload.email,
        password:payload.password,
        firstName:payload.firstName,
        lastName:payload.lastName,
      },
      refetchQueries:[{query:getUsersForApprovalQuery}]
    })
    .pipe((map((result:any) => result.data.signupModeratorUser)))
  }

  approvedBlockUser(payload:any){
    const { id, approved } = payload;

    return this.apollo.mutate({
      mutation:approveBlockUserMutation,
      variables:{
        userId:id,
        approved:approved
      },
      refetchQueries:[{query:getUsersForApprovalQuery}]
    })
    .pipe(map((result:any) => result.data.approveBlockUser))
  }

  logout(){
  return  this.apollo.mutate({
      mutation:logOutMutation
    })
    .pipe((map((result:any) => result.data.logout)))
  }


  registerNormalUser(payload:any){
    return this.apollo.mutate({
      mutation:registerNormalUser,
      variables:{
        email:payload.email,
        password:payload.password,
        firstName:payload.firstName,
        lastName:payload.lastName,
      },
    })
    .pipe((map((result:any) => result.data.signupNormalUser)))
  }


  getNormalUsers(){
    return this.apollo.watchQuery({
      query:getNoramlUsersQuery
    })
    .valueChanges
    .pipe((map((result:any) => result.data.getNormalUsers)))
  }


  banUser(payload){
    const { userId, isBanned, banStartDate, banEndDate} = payload;

    return this.apollo.mutate({
      mutation:banUserMutation,
      variables:{
        userId:userId,
        isBanned:isBanned,
        banStartDate:banStartDate,
        banEndDate:banEndDate
      },
      refetchQueries:[getNoramlUsersQuery]
    })
    .pipe((map((result:any) => result.data.banUser)))
  }
}
