import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: FormGroup;
  error;

  constructor(private userservice: UserService, private fb: FormBuilder, private router: Router) {
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
    const _this = this;
    this.userservice.login(email, password, function(data) {
      if (data.error) {
        _this.error = data.error;
        return;
      }

      _this.router.navigate(['/tap']);
    });
  }
}
