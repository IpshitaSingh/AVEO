import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {SignUp} from '../Model/sign-up';
import { SignUpService } from '../service/sign-up.service';
import { Router } from '@angular/router';
import { EmailValidator } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class SignUpComponent implements OnInit {
 
  signUpModel1 = new SignUp("","", null ,"","")
  constructor(private _signUpService: SignUpService , private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this._signUpService.signUp(this.signUpModel1).subscribe(
      (data) => {console.log("data",data)
                localStorage.setItem("email",data.email)},
      error => console.log("error",error)
    )
    this.router.navigate(['/login'] ,{ queryParams:{ "model":this.signUpModel1}} )
  }
}
