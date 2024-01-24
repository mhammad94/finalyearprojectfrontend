import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { IconsProviderModule } from '../../icons-provider.module';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzCommentModule } from 'ng-zorro-antd/comment';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzCalendarModule } from 'ng-zorro-antd/calendar';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NzLayoutModule,
    NzMenuModule,
    IconsProviderModule,
    NzPageHeaderModule,
    NzButtonModule,
    NzSpaceModule,
    NzTableModule,
    NzGridModule,
    NzModalModule,
    NzFormModule,
    NzInputModule,
    NzCardModule,
    NzMessageModule,
    NzCommentModule,
    NzListModule,
    NzAvatarModule,
    NzPopoverModule,
    NzCollapseModule,
    NzIconModule,
    NzPopconfirmModule,
    NzCalendarModule
  ],
  exports:[
    NzLayoutModule,
    NzMenuModule,
    IconsProviderModule,
    NzPageHeaderModule,
    NzButtonModule,
    NzSpaceModule,
    NzTableModule,
    NzGridModule,
    NzModalModule,
    NzFormModule,
    NzInputModule,
    NzCardModule,
    NzMessageModule,
    NzCommentModule,
    NzListModule,
    NzAvatarModule,
    NzPopoverModule,
    NzCollapseModule,
    NzIconModule,
    NzPopconfirmModule,
    NzCalendarModule
  ]
})
export class AntdesignModule { }
