import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { AntdesignModule } from '../../shared/antdesign/antdesign.module';
import { AdminViewComponent } from './components/admin-view/admin-view.component';
import { AddModeratorComponent } from './components/admin-view/add-moderator/add-moderator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DiscussionForumComponent } from './components/discussion-forum/discussion-forum.component';
import { AddTopicComponent } from './components/discussion-forum/add-topic/add-topic.component';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { BanUserComponent } from './components/ban-user/ban-user.component';
import { BanCalendarComponent } from './components/ban-user/ban-calendar/ban-calendar.component';
import { KeywordsFilterComponent } from './components/admin-view/keywords-filter/keywords-filter.component';



@NgModule({
  declarations: [
    DashboardComponent,
    AdminViewComponent,
    AddModeratorComponent,
    DiscussionForumComponent,
    AddTopicComponent,
    BanUserComponent,
    BanCalendarComponent,
    KeywordsFilterComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    AntdesignModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers:[
  ]
})
export class DashboardModule { }
