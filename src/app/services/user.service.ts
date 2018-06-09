import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import User from '../../models/user';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  uri = 'http://localhost:4000/users/';

  constructor(private http: HttpClient) { }

  getAll(callback) {
    this.http.get(this.uri).subscribe((users) => {
      callback(users);
    });
  }

  get(id, callback) {
    this.http.get(this.uri + id).subscribe((user) => {
      callback(user);
    });
  }

  setSession(authResult) {
    const expiresAt = moment().add(authResult.expiresIn,'second');

    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('user', JSON.stringify(authResult.user));
    localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()) );
  }

  register(email, password, firstName, lastName, callback) {
    this.http.post(this.uri + 'add', {
      email: email,
      password: password, 
      firstName: firstName,
      lastName: lastName
    }).subscribe((authResult) => {
      this.setSession(authResult);
      callback(authResult);
    }, (error) => {
      callback(error);
    });
  }

  login(email, password, callback) {
    this.http.post(this.uri + 'login', {
      email: email,
      password: password
    }).subscribe((authResult) => {
      this.setSession(authResult);
      callback(authResult);
    }, (error) => {
      callback(error);
    });
  }

  getExpiration() {
    return moment(JSON.parse(localStorage.getItem("expires_at")));
  }

  isLoggedIn() {
    return moment().isBefore(this.getExpiration());
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  logout() {
    localStorage.removeItem('id_token');
    localStorage.removeItem('user');
    localStorage.removeItem('expires_at');
  }

  getUser() {
    return JSON.parse(localStorage.getItem('user'));
  }

}
