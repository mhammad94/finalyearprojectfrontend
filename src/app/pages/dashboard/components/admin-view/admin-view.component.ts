import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { AddModeratorComponent } from './add-moderator/add-moderator.component';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../../../store/app.state';
import { registerModerator } from '../../../../store/authentication/auth.actions';
import { getUsersForApproval, setUsersForApproval, setUsersForApprovalSuccess } from '../../../../store/dashboard/dashboard.actions';
import { Observable, Subscription } from 'rxjs';
import { User } from '../../../../models/auth.models';
import { getDashboardState, getUsersForApprovalState } from '../../../../store/dashboard/dashboard.selector';
import { stringToUUID } from '../../../../utils/utils';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrl: './admin-view.component.scss'
})
export class AdminViewComponent implements OnInit {

  getUsersSubscription$:Subscription = new Subscription();
  getusersData$:Observable<User[]> = new Observable<User[]>();
  usersData:User[] = [];
  constructor(private modal: NzModalService, private viewContainerRef:
    ViewContainerRef,private store:Store<AppState>){

  }
  loading:boolean = false;


  ngOnInit(): void {
    this.store.dispatch(getUsersForApproval())
    this.getusersData$ = this.store.pipe(select(getUsersForApprovalState))
    this.getUsersSubscription$ = this.getusersData$.subscribe(response => {
      this.usersData = response
    })
  }

  addModerator(){
   let modalRef = this.modal.create<AddModeratorComponent>({
     nzTitle:"Add Moderator",
     nzContent:AddModeratorComponent,
     nzViewContainerRef: this.viewContainerRef,
     nzWidth:970,
     nzOnOk:(data) => {

      return new Promise((resolve, reject) => {
          setTimeout(() => {
            if(data.addModeratorForm.valid){
              let formData = data.veriyData()
              this.store.dispatch(registerModerator(formData))
              resolve()
            }else{
              data.addModeratorForm.markAllAsTouched()
              data.addModeratorForm.markAsDirty()
              data.addModeratorForm.markAsTouched()
              data.addModeratorForm.markAsPending()
              reject()
            }

          },1000)
      })
     }

   })
  }

  onItemChecked(id: string, approved: boolean): void {
    let data = {
      id:stringToUUID(id),
      approved:approved
    }
    this.store.dispatch(setUsersForApproval(data))
  }

  consifrmClose(data:any){

  }

}


