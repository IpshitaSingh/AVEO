import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { LoginModel } from "../Model/login-model" ;
import { LoginService } from '../service/login.service';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class LoginComponent implements OnInit {

  loginModel1 = new LoginModel("")

  constructor(private _loginService: LoginService , private route: ActivatedRoute , private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this._loginService.login(this.loginModel1)
    .subscribe(
      (data)=>{
        // console.log(data["data"][0].email)
        if(data["data"][0].email == this.loginModel1.email && data["data"][0].password == this.loginModel1.pwd){
          localStorage.setItem("name",data["data"][0].name)
          localStorage.setItem("email",data["data"][0].email)
          localStorage.setItem("phone",data["data"][0].phone)
          localStorage.setItem("birthday",data["data"][0].birthday)
          localStorage.setItem("logged","true")
          this.router.navigate(['/userhome'])
        }
        else{
          alert("credentials are not correct")
        }
      },
      (error) =>{ 
        console.log("error!", error) }
    )
    
    
  }
}
