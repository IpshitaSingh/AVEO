import { Component, OnInit } from '@angular/core';
declare var JS4HomePage: any;
import { Router } from '@angular/router';

@Component({
  selector: 'app-open-side-bar',
  templateUrl: './open-side-bar.component.html',
  styleUrls: ['./open-side-bar.component.css']
})
export class OpenSideBarComponent implements OnInit {
  logged = localStorage.getItem("logged")
  username = localStorage.getItem("name")
  signInbtn;

  

  constructor(private router: Router) {
     

  }

  ngOnInit(): void {
    
  }
//   logOut(){
//     localStorage.setItem("logged","false")
//     localStorage.removeItem("name")
//     localStorage.removeItem("email")
//     localStorage.removeItem("phone")
//     localStorage.removeItem("birthday")
//     this.signInbtn = document.getElementsByClassName("signIn")
//     this.signInbtn[1].classList.remove("hide")
//     this.signInbtn[1].classList.remove("show")
//     this.signInbtn[1].classList.toggle("show")
//     this.signInbtn[2].classList.toggle("hide")
       
// }

}
