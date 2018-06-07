import { Component, OnInit } from '@angular/core';

import { UserService } from '../user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.css']
})
export class ScoresComponent implements OnInit {
  scores = [];

  constructor(private userservice: UserService, private router: Router) {
    if (this.userservice.isLoggedOut()) {
      this.router.navigate(['/']);
    }
  }

  logout() {
    this.userservice.logout();
    this.router.navigate(['/']);
  }

  ngOnInit() {
  }

}
