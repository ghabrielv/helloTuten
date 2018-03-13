import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class BookingServiceProvider {
  
  constructor(public http: Http) {
  }

  BookingFromApi(adminemail, email, current, token, app) {
    return new Promise((resolve, reject) => {
      let apiUrl:string = 'https://dev.tuten.cl:443/TutenREST/rest/';
      let headers = new Headers();
      headers.append('adminemail', adminemail);
      headers.append('token', token);
      headers.append('app', app);

      this.http.get(apiUrl + 'user/' + email + '/bookings?current=' + current, { headers:headers })
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          alert("Datos incorrectos.");
          reject(err);
        });
    });
  }
}
