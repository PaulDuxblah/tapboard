import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from './user.service';
import Score from '../../models/score';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {
  uri = 'http://localhost:4000/scores/';

  constructor(private http: HttpClient, private userservice: UserService) { }

  getAll(callback) {
    this.http.get(this.uri).subscribe((scores) => {
      callback(scores);
    });
  }

  get(id, callback) {
    this.http.get(this.uri + id).subscribe((score) => {
      callback(score);
    });
  }

  add(points, user, callback) {
    this.http.post(this.uri + 'add', {
      points: points,
      user: this.userservice.getUser()._id,
      date: Date.now()
    }).subscribe((score) => {
      callback(score);
    });
  }

  dateToString(date) {
    date = new Date(date);

    let day = date.getDate();
    if (day < 10) {
      day = '0' + day;
    }

    let month = date.getMonth() + 1;
    if (month < 10) {
      month = '0' + month;
    }

    return  day + '/' 
            + month + '/' 
            + date.getFullYear() + ' - ' 
            + date.getHours() + 'h' 
            + date.getMinutes() + 'm' 
            + date.getSeconds() + 's';
  }

}
