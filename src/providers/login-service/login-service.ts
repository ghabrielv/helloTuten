import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginServiceProvider {
  
  constructor(public http: Http) {
  }

  LoginFromApi(email, password, app) {
    return new Promise((resolve, reject) => {
      let apiUrl:string = 'https://dev.tuten.cl:443/TutenREST/rest/';
      let headers = new Headers();
      headers.append('password', password);
      headers.append('app', app);

      this.http.put(apiUrl + 'user/' + email, { }, { headers:headers })
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          alert("Correo electrónico o contraseña incorrecto.");
          reject(err);
        });
    });
  }
}
