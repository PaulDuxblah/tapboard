import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../services/user.service';
import { ScoreService } from '../services/score.service';
import { Router } from '@angular/router';

@Component({
  selector: 'auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  login = true
  register = false

  constructor(private userservice: UserService, private router: Router) {
    if (this.userservice.isLoggedIn()) {
      this.router.navigate(['/tap']);
    }
  }

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
