import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';
import { LoginModel } from './models/login.model';
import { LoginService } from './login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginVm: LoginModel = new LoginModel({});
  loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private loginSvc: LoginService) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.loginForm = this.formBuilder.group({
      'username': [this.loginVm.username, Validators.required],
      'password': [this.loginVm.password, Validators.required]
    });
  }

  login() {
    this.loginSvc.login();
  }

  lostPass() {
    console.log('lost')

  }

}
