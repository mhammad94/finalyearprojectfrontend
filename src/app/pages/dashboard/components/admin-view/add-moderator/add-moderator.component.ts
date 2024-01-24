import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NzModalRef } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-add-moderator',
  templateUrl: './add-moderator.component.html',
  styleUrl: './add-moderator.component.scss'
})
export class AddModeratorComponent {

  readonly #modal = inject(NzModalRef);


  addModeratorForm:FormGroup = new FormGroup({
    firstName:new FormControl('', [Validators.required, Validators.minLength(5)]),
    lastName:new FormControl('', [Validators.required, Validators.minLength(5)]),
    email:new FormControl('', [Validators.required, Validators.email]),
    password:new FormControl('',[Validators.required, Validators.minLength(5)])
  })
  veriyData(){
    return this.addModeratorForm.value

  }
}
