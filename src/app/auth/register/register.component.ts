import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { UserService } from '../../user.service';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  register: FormGroup;

  constructor(private userservice: UserService, private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.register = this.fb.group({
      email: ['', Validators.required ],
      password: ['', Validators.required ],
      firstName: ['', Validators.required ],
      lastName: ['', Validators.required ],
      conditions: ['', Validators.required ]
   });
  }

  ngOnInit() {
  }

  registerUser(email, password, firstName, lastName, conditions) {
    if (email == '' || password == '' || firstName == '' || lastName == '' || !conditions) {
      return false;
    }

    const _this = this;
    this.userservice.register(email, password, firstName, lastName, function(data) {
      if (data === undefined) {
        return false;
      }
    });
  }

}
