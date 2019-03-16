import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from '../../environments/environment.prod';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthService {

  authToken;
  user;

  constructor(
    private http: HttpClient
  ) { }

  login(user) {
    return this.http.post(env.api + '/auth/login', user)
  }

  storeUserData(token, user) {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  logout() {
    this.authToken = null; // Set token to null
    this.user = null; // Set user to null
    localStorage.clear(); // Clear local storage
  }
}
