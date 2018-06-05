import { Component, OnInit } from '@angular/core';

import { User } from '../user/user';
import {Router} from '@angular/router';

@Component({
  selector: 'scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.css']
})
export class ScoresComponent implements OnInit {
  scores = [];

  constructor() { }

  logout() {
    User.logout();
  }

  ngOnInit() {
  }

}
