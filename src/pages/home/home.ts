import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public userData : any;

  constructor(public navCtrl: NavController) {
  	this.userData = JSON.parse(localStorage.getItem('userData'));
  }

  logout(){
    localStorage.clear();
    setTimeout(() => this.navCtrl.push(LoginPage), 1000);
  }

}
