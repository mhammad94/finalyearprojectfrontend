import { Component, ViewContainerRef, OnInit } from '@angular/core';
import { AddTopicComponent } from './add-topic/add-topic.component';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../store/app.state';
import { addNewComment, addNewTopic, deleteComment, deleteTopic, getAllTopics } from '../../../../store/dashboard/dashboard.actions';
import { Observable } from 'rxjs';
import { Topic } from '../../../../models/dashboard.model';
import { getAllTopicsState } from '../../../../store/dashboard/dashboard.selector';
import { User } from '../../../../models/auth.models';
import { getLoggedInUser } from '../../../../store/authentication/auth.selector';
import { UserTypesEnum } from '../../../../enums/user.enums';

@Component({
  selector: 'app-discussion-forum',
  templateUrl: './discussion-forum.component.html',
  styleUrl: './discussion-forum.component.scss'
})
export class DiscussionForumComponent implements OnInit {

  topics$:Observable<Topic[]> = new Observable<Topic[]>();
  user$:Observable<User> = new Observable<User>();
  loggedInuser:User;
  showComments:boolean = false;
  selectedTopic:number = 0

  normalUserRole = UserTypesEnum.NORMAULUSER
  adminUserRole = UserTypesEnum.ADMIN
  moderatorUserRole = UserTypesEnum.MODERATOR

  data: any[] = [];
  submitting = false;
  user = {
    author: 'Han Solo',
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
  };
  inputValue = '';



  handleSubmit(topicId:any, event): void {
    this.submitting = true;
    const content = this.inputValue;
    this.inputValue = '';
    this.store.dispatch(addNewComment({topicId, content}))
  }
  customStyle: {
    background: '#f7f7f7',
    'border-radius': '4px',
    'margin-bottom': '24px',
    border: '0px'
  }


  constructor(private modal: NzModalService, private viewContainerRef:
    ViewContainerRef, private store:Store<AppState>){}


    ngOnInit(): void {
      debugger
      this.store.dispatch(getAllTopics())
      this.topics$ = this.store.select(getAllTopicsState)
      this.user$ = this.store.select(getLoggedInUser)
      this.topics$.subscribe(res => {
      })

      this.user$.subscribe(res => {
        this.loggedInuser = res
      })
    }

  addTopic(){
    let modalRef = this.modal.create<AddTopicComponent>({
      nzTitle:"Add Topic",
      nzContent:AddTopicComponent,
      nzViewContainerRef: this.viewContainerRef,
      nzWidth:600,
     nzOnOk:(data) => {
       return new Promise((resolve, reject) => {
           setTimeout(() => {
             let formData = data.sendFormData()
             this.store.dispatch(addNewTopic(formData))
             resolve()
           },3000)
       })
      }

    })
   }


   hideShowComments(index:any){
      this.selectedTopic = index
   }

   onAccordianClicked(event:any){
      this.showComments = false
   }

   deleteComment(commentId:any){
     this.store.dispatch(deleteComment({commentId}))
   }


   deleteTopic(topicId:any){
    this.store.dispatch(deleteTopic({topicId}))
   }


   captureEvent(event:any){
   }

   beforeConfirmDelete(): Promise<boolean> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(true);
      }, 3000);
    });
  }
}
