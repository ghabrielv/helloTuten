import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

import { LoginServiceProvider } from '../../providers/login-service/login-service';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  responseData : any;
  userData = {"email" : "", "password" : "", "app" : "APP_WEB"};
  LoginForm: FormGroup;

  constructor(public navCtrl: NavController, public LoginServiceProvider:LoginServiceProvider, public fb: FormBuilder) {
    if (typeof(localStorage.getItem("userData")) == 'string') {
      this.navCtrl.push(HomePage);
    }
    this.LoginForm = this.createForm();
  }

  login(){
    this.LoginServiceProvider.LoginFromApi(this.userData.email, this.userData.password, this.userData.app).then((result) => {
      this.responseData = result;
      localStorage.setItem('userData', JSON.stringify(this.responseData));
      this.navCtrl.push(HomePage);
    }, (err) => {
    });
  }

  private createForm(){
    return this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

}
