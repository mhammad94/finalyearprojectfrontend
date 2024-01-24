import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-topic',
  templateUrl: './add-topic.component.html',
  styleUrl: './add-topic.component.scss'
})
export class AddTopicComponent {


  addTopicForm:FormGroup = new FormGroup({
    title:new FormControl('',[Validators.required]),
    content:new FormControl('',[Validators.required])
  })


  sendFormData(){
    return this.addTopicForm.value
  }
}
