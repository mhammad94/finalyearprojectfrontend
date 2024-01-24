import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../store/app.state';
import { login } from '../../../../store/authentication/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loading:boolean = false
  constructor(private store:Store<AppState>){

  }
  loginForm:FormGroup = new FormGroup({
    email:new FormControl('', [Validators.required, Validators.email]),
    password:new FormControl('',[Validators.required, Validators.minLength(5)])
  })


  login(){
    this.loading = true
    this.store.dispatch(login(this.loginForm.value))
  }


}
