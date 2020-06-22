import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginModel } from '../Model/login-model';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url = "http://localhost:3000/login";
  constructor(private _http: HttpClient) { }
  login( user: LoginModel){
    return this._http.post<any>(this.url , user )
        }
}
