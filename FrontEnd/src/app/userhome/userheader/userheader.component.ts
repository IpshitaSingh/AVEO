import { Component, OnInit } from '@angular/core';
import { splitAtColon } from '@angular/compiler/src/util';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userheader',
  templateUrl: './userheader.component.html',
  styleUrls: ['./userheader.component.css']
})
export class UserheaderComponent implements OnInit {
  username = localStorage.getItem("name")
  user = this.username.split(" ")
  firstname = this.user[0]
  constructor() { }

  ngOnInit(): void {
  }

}
