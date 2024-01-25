import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../../store/app.state';
import { addFilterKeyWord, deleteFilterKeyWord, getAllFilterKeyWords } from '../../../../../store/dashboard/dashboard.actions';
import { Observable } from 'rxjs';
import { FilterKeyWords } from '../../../../../models/dashboard.model';
import { getAllFilterKeyWordsState } from '../../../../../store/dashboard/dashboard.selector';

@Component({
  selector: 'app-keywords-filter',
  templateUrl: './keywords-filter.component.html',
  styleUrl: './keywords-filter.component.scss'
})
export class KeywordsFilterComponent implements OnInit {
  keyWordValue:string = ''
  filterKeyWords:Observable<FilterKeyWords[]> = new Observable<FilterKeyWords[]>


  constructor(private store:Store<AppState>){}

  ngOnInit(): void {
    this.store.dispatch(getAllFilterKeyWords())
    this.filterKeyWords = this.store.select(getAllFilterKeyWordsState)

  }

  addKeyWord(){
    this.store.dispatch(addFilterKeyWord({keyword:this.keyWordValue}))
  }

  deleteKeyWord(keywordId:any){
    this.store.dispatch(deleteFilterKeyWord({keywordId:keywordId}))
  }
}
