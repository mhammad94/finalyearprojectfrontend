import { Component, ViewContainerRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../store/app.state';
import { Observable } from 'rxjs';
import { User } from '../../../../models/auth.models';
import { getNormalUsers } from '../../../../store/dashboard/dashboard.actions';
import { getNormalUsersState } from '../../../../store/dashboard/dashboard.selector';
import { NzModalService } from 'ng-zorro-antd/modal';
import { BanCalendarComponent } from './ban-calendar/ban-calendar.component';
import { banUser } from '../../../../store/authentication/auth.actions';
import moment from 'moment';

@Component({
  selector: 'app-ban-user',
  templateUrl: './ban-user.component.html',
  styleUrl: './ban-user.component.scss'
})
export class BanUserComponent {

  users$:Observable<User[]> = new Observable<User[]>();
  constructor(private store:Store<AppState>,
    private modal: NzModalService, private viewContainerRef:
    ViewContainerRef){
    this.store.dispatch(getNormalUsers())
    this.users$ = this.store.select(getNormalUsersState)


    this.users$.subscribe(res => {
    })
  }

  unBanUser(userId:any){
    let payload = {
      userId:userId,
      isBanned:false,
      banStartDate:moment(),
      banEndDate:moment()
    }
    this.store.dispatch(banUser({data:payload}))
  }

  banUser(userId:any){
    let modalRef = this.modal.create<BanCalendarComponent>({
      nzTitle:"Ban Dates",
      nzContent:BanCalendarComponent,
      nzViewContainerRef: this.viewContainerRef,
      nzWidth:800,
     nzOnOk:(data) => {
       return new Promise((resolve, reject) => {
           setTimeout(() => {
             if(data.areDatesValid()){
              let dates = data.getDates()
              let payload = {
                userId:userId,
                isBanned:true
                ,...dates}
              this.store.dispatch(banUser({data:payload}))
              resolve()
             }else{
              reject()
             }

           },3000)
       })
      }

    })
  }

}
