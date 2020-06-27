import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  username = localStorage.getItem("name")
  modal;
  btn;
  span;
  sendbtn;
  feedback;
  cancelbtn;
  alert;
  successalert;
  warningalert;


// When the user clicks the button, open the modal 
popup(){
  this.modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
close(){
  this.modal.style.display = "none";
}

// When the user clicks on the send button

send(){
  if(this.feedback.value != ""){
  this.successalert.classList.remove("height")
  this.successalert.classList.toggle("visibility")
  this.warningalert.classList.remove("visibility")
  this.feedback.value = "";
  }
  else{
    this.warningalert.classList.remove("height")
    this.successalert.classList.remove("visibility")
    this.warningalert.classList.toggle("visibility")
  }
}

// to cancel feedback modal
cancel(){
  this.modal.style.display = "none"
}

closealert(){
  this.warningalert.classList.toggle("height")
  this.successalert.classList.toggle("height")
  
}
  constructor(private router:Router) { }

  ngOnInit(): void {
      // Get the modal
  this.modal = document.getElementById("myModal");

// Get the button that opens the modal
this.btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
this.span = document.getElementsByClassName("close")[0];

// Get the send button
this.sendbtn = document.getElementById("sendbtn")

// to get feedback given in textares
this.feedback = document.getElementById("feedback")

// get the cancel button
this.cancelbtn = document.getElementById("cancel")

// get alert box
this.alert = document.getElementsByClassName("alert")

// get success alert 
this.successalert = document.getElementsByClassName("success")[0]

// get warning alert
this.warningalert = document.getElementsByClassName("warning")[0]
  }
  LogOut(){
    localStorage.setItem("logged","false")
    localStorage.removeItem("name")
    localStorage.removeItem("email")
    localStorage.removeItem("phone")
    localStorage.removeItem("birthday")
    this.router.navigate(['/home'])
  }

}
