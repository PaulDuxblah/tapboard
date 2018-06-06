import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { UserService } from '../../user.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: FormGroup;

  constructor(private userservice: UserService, private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.login = this.fb.group({
      email: ['', Validators.required ],
      password: ['', Validators.required ]
    });
  }

  ngOnInit() {
  }

  loginUser(email, password) {
    // let user;
    this.userservice.login(email, password, function(data) {
      if (data === undefined) {
        return false;
      }

      data;
    });
  }
}
