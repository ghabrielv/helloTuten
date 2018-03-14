import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { HttpModule } from '@angular/http';

import { helloTuten } from './app.component';

import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';

import { SearchPipe } from '../pipes/search/search';

import { LoginServiceProvider } from '../providers/login-service/login-service';
import { BookingServiceProvider } from '../providers/booking-service/booking-service';

@NgModule({
  declarations: [
    helloTuten,
    LoginPage,
    HomePage,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(helloTuten)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    helloTuten,
    LoginPage,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LoginServiceProvider,
    BookingServiceProvider
  ]
})
export class AppModule {}
