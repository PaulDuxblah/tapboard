import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import User from '../../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  uri = 'http://localhost:4000/users/';

  constructor(private http: HttpClient) { }

  register(email, password, firstName, lastName, callback) {
    this.http.post(this.uri + 'add', {
      email: email,
      password: password, 
      firstName: firstName,
      lastName: lastName
    }).subscribe(res => callback(res));
  }

  getAll() {
    return this.http.get(this.uri);
  }

  get(id) {
    return this.http.get(this.uri + id);
  }

  login(email, password, callback) {
    this.http.post(this.uri + 'login', {
      email: email,
      password: password
    }).subscribe(res => callback(res));
  }

}
