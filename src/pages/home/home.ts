import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

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
  keyword;

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
      console.log(typeof this.bookingData[0].bookingId);
    }, (err) => {
    });
  }

  setFilter(searchTerm = 1066) {
    console.log( this.bookingData.filter((book) => {
      return book.bookingId == 1066 > -1;
    }));
    
  }

}
