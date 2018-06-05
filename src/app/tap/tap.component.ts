import { Component, OnInit } from '@angular/core';

import { User } from '../user/user';

@Component({
  selector: 'tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.css']
})
export class TapComponent implements OnInit {
  imgFileName = 'tapOff.png';
  score = 0;
  endMs = 10000;
  currentTime = 0;
  intervalMs = 20;

  constructor() { }

  logout() {
    User.logout();
  }

  isPressed() {
    if (this.score === 0) {
      this.startTimer();
    }

    this.score++;
    this.imgFileName = 'tapOn.png';
  }

  isNotPressed() {
    this.imgFileName = 'tapOff.png';
  }

  startTimer() {
    var _this = this;
    var timer = setInterval(function() {
      _this.currentTime += _this.intervalMs;

      if (_this.currentTime === _this.endMs) {
        clearInterval(timer);
        _this.end();
      }
    }, this.intervalMs);
  }

  end() {
    console.log('end');
    console.log(this.score);
  }

  ngOnInit() {
  }

}
