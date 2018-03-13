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
  userAPI = {"email" : "testapis@tuten.cl", "password" : "1234", "app" : "APP_BCK"};
  LoginForm: FormGroup;

  constructor(public navCtrl: NavController, public LoginServiceProvider:LoginServiceProvider, public fb: FormBuilder) {
    if (typeof(localStorage.getItem("userData")) == 'string') {
      this.obtenerToken();
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

  obtenerToken() {
    this.LoginServiceProvider.LoginFromApi(this.userAPI.email, this.userAPI.password, this.userAPI.app).then((result) => {
      this.responseData = result;
      localStorage.setItem('userAPI', JSON.stringify(this.responseData));
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
