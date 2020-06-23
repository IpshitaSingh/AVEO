import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  username = localStorage.getItem("name")

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  LogOut(){
    localStorage.setItem("logged","false")
    localStorage.removeItem("name")
    localStorage.removeItem("email")
    localStorage.removeItem("phone")
    this.router.navigate(['/home'])
  }

}
