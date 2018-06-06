import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../user.service';
import User from '../../../models/user';

@Component({
  selector: 'auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  login = true
  register = false

  constructor(private userservice: UserService) { }

  hideLogin() {
    this.login = false;
  }

  hideRegister() {
    this.register = false;
  }

  toggleDisplayLogin() {
    this.login = !this.login;
    this.hideRegister();
  }

  toggleDisplayRegister() {
    this.register = !this.register;
    this.hideLogin();
  }

  ngOnInit() {
  }

}
