import { Component } from '@angular/core';
import moment from 'moment';
import { NzMessageService } from 'ng-zorro-antd/message';


@Component({
  selector: 'app-ban-calendar',
  templateUrl: './ban-calendar.component.html',
  styleUrl: './ban-calendar.component.scss'
})
export class BanCalendarComponent {

  constructor(private message: NzMessageService){}

  banStartDate: Date | null = new Date();
  banEndDate: Date | null = new Date();
  banStartDisabledDate = (current: Date): boolean => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return current < today;;
  };

  banEndDisabledDate = (current: Date): boolean => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return current < today;;
  };

  areDatesValid(){
    let banStartDate = moment(this.banStartDate);
    let banEndDate = moment(this.banEndDate)

    if(banEndDate.isBefore(banStartDate)){
      this.message.error("Ban Start Date Should be greater than Ban End Date")
      return false
    }else{
      return true
    }
  }

  getFormatedDate(date:any){
     return moment(date).format('dd/mm/yyy')
  }

  getDates(){
    return {
      banStartDate:moment(this.banStartDate),
      banEndDate:moment(this.banEndDate)
    }

  }
}
