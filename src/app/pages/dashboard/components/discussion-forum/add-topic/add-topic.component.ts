import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, map } from 'rxjs';
import { FilterKeyWords } from '../../../../../models/dashboard.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../../store/app.state';
import { getAllFilterKeyWordsState } from '../../../../../store/dashboard/dashboard.selector';

@Component({
  selector: 'app-add-topic',
  templateUrl: './add-topic.component.html',
  styleUrl: './add-topic.component.scss'
})
export class AddTopicComponent implements OnInit{
  filterKeyWords$:Observable<string[]> = new Observable<string[]>
  filterKeyWords:string[];


  constructor(private store:Store<AppState>){}

  ngOnInit(): void {
   this.filterKeyWords$ = this.store.select(getAllFilterKeyWordsState)

   this.filterKeyWords$.subscribe(res => {
    this.filterKeyWords = res
    console.log(res)
   })

  }

  addTopicForm:FormGroup = new FormGroup({
    title:new FormControl('',[Validators.required]),
    content:new FormControl('',[Validators.required])
  })


  filterForKeyWords(sentence:string, wordsToRemove:string[]){
    debugger
    let lowerCaseSentence = sentence.toLowerCase();

    wordsToRemove.forEach(word => {
      // Convert word to lowercase for case-insensitive comparison
      let lowerCaseWord = word.toLowerCase();
      if (lowerCaseSentence.includes(lowerCaseWord)) {
          // Remove word from string (case-sensitive)
          lowerCaseSentence = lowerCaseSentence.replace(new RegExp("\\b" + lowerCaseWord + "\\b", "g"), "");
      }
  });

  return lowerCaseSentence.trim();
  }


  isFormValid(){

    if(this.addTopicForm.valid){
      return true
    }else{
      return false
    }
  }


  sendFormData(){
    let topicTitle = this.filterForKeyWords(this.addTopicForm.value['title'], this.filterKeyWords)
    let topicContent = this.filterForKeyWords(this.addTopicForm.value['content'], this.filterKeyWords)
    return {
      title:topicTitle,
      content:topicContent
    }
  }
}
