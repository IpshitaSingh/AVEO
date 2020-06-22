import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SignUp} from '../Model/sign-up'

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  url = "http://localhost:3000/signUp";
  constructor(private _http:HttpClient) { }
  signUp(user:SignUp){
    return this._http.post<any>(this.url,user)

  }
}
