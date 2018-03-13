import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { LoginServiceProvider } from '../../providers/login-service/login-service';
import { BookingServiceProvider } from '../../providers/booking-service/booking-service';

import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public userData : any;
  public userAPI: any;
  public bookingData: any;
  responseData : any;

  constructor(public navCtrl: NavController, public BookingServiceProvider:BookingServiceProvider) {
    this.userData = JSON.parse(localStorage.getItem('userData'));
    this.userAPI = JSON.parse(localStorage.getItem('userAPI'));
    this.obtenerLista();
  }

  logout(){
    localStorage.clear();
    setTimeout(() => this.navCtrl.push(LoginPage), 1000);
  }

  obtenerLista(){
    this.BookingServiceProvider.BookingFromApi("testapis@tuten.cl", "miguel@tuten.cl", true, this.userAPI.sessionTokenBck, "APP_BCK").then((result) => {
      this.responseData = result;
      localStorage.setItem('bookingData', JSON.stringify(this.responseData));
      this.bookingData = JSON.parse(localStorage.getItem('bookingData'));
    }, (err) => {
    });
  }

}
