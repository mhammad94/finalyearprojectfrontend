import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../store/app.state';
import { registerNormalUser } from '../../../../store/authentication/auth.actions';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {

  constructor(private store:Store<AppState>){}

  signupForm:FormGroup = new FormGroup({
    firstName:new FormControl('', [Validators.required, Validators.minLength(5)]),
    lastName:new FormControl('', [Validators.required, Validators.minLength(5)]),
    email:new FormControl('', [Validators.required, Validators.email]),
    password:new FormControl('',[Validators.required, Validators.minLength(5)])
  })


  signUp(){
    this.store.dispatch(registerNormalUser(this.signupForm.value))
  }
}
