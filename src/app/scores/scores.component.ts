import { Component, OnInit } from '@angular/core';

import { UserService } from '../services/user.service';
import { ScoreService } from '../services/score.service';
import {Router} from '@angular/router';

@Component({
  selector: 'scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.css']
})
export class ScoresComponent implements OnInit {
  scores = [];

  constructor(private userservice: UserService, private scoreservice: ScoreService, private router: Router) {
    if (this.userservice.isLoggedOut()) {
      this.router.navigate(['/']);
    }
  }

  logout() {
    this.userservice.logout();
    this.router.navigate(['/']);
  }

  ngOnInit() {
    this.getScores();
  }

  getScores() {
    const _this = this;
    this.scoreservice.getAll(function (scores) {
      scores.forEach(function (score, key) {
        scores[key].date = _this.scoreservice.dateToString(score.date);
      })
      _this.scores = scores;
    });
  }

}
