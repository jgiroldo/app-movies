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
  emailForm: FormGroup;
  email: String;
  displayDialog = false;
  recoverMsg = '';
  constructor(private formBuilder: FormBuilder, public loginSvc: LoginService) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.loginForm = this.formBuilder.group({
      'username': [this.loginVm.username, Validators.required],
      'password': [this.loginVm.password, Validators.required]
    });
    this.emailForm = this.formBuilder.group({
      'email': [this.email, Validators.compose([Validators.required, Validators.email])]
    });
  }

  login() {
    this.loginSvc.login(this.loginVm);
  }

  lostPass() {
    this.displayDialog = true;
  }

  recoverPassword() {
    this.recoverMsg = 'An email was sent for password recovery.';
    this.closeDialog();
  }

  closeDialog() {
    this.displayDialog = false;
    this.email = undefined;
  }

}
