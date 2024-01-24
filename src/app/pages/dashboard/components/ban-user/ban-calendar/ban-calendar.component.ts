import { Component } from '@angular/core';
import moment from 'moment';


@Component({
  selector: 'app-ban-calendar',
  templateUrl: './ban-calendar.component.html',
  styleUrl: './ban-calendar.component.scss'
})
export class BanCalendarComponent {

  constructor(){}

  banStartDate: Date | null = new Date();
  banEndDate: Date | null = new Date();
  banStartDisabledDate = (current: Date): boolean => {
    // Disable dates before today
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Set hours, minutes, seconds, and milliseconds to 0 for accurate date comparison
    return current < today;;
  };

  banEndDisabledDate = (current: Date): boolean => {
    // Disable dates before today
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Set hours, minutes, seconds, and milliseconds to 0 for accurate date comparison
    return current < today;;
  };

  areDatesValid(){
    let banStartDate = moment(this.banStartDate);
    let banEndDate = moment(this.banEndDate)

    if(banEndDate.isBefore(banStartDate)){
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
