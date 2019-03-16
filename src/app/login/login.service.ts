import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment as env } from '../../environments/environment.prod';

@Injectable()
export class LoginService {

  authToken;
  user;
  options;
  // private HOST = '//localhost:3000';

  constructor(
    private http: HttpClient
  ) { }

  // Function to get token from client local storage
  loadToken() {
    this.authToken = localStorage.getItem('token'); // Get token and asssign to variable to be used elsewhere
  }

  // Function to check if username is taken
  // checkUsername(username) {
  //   return this.http.get(this.HOST + 'authentication/checkUsername/' + username).map(res => res.json());
  // }

  // Function to check if e-mail is taken
  // checkEmail(email) {
  //   return this.http.get(this.HOST + 'authentication/checkEmail/' + email).map(res => res.json());
  // }

  // Function to login user
  login(user) {
    return this.http.post(env.api + 'authentication/login', user)
    // .map(res => res.json());
  }

  // Function to logout
  logout() {
    this.authToken = null; // Set token to null
    this.user = null; // Set user to null
    localStorage.clear(); // Clear local storage
  }

  // Function to store user's data in client local storage
  storeUserData(token, user) {
    localStorage.setItem('token', token); // Set token in local storage
    localStorage.setItem('user', JSON.stringify(user)); // Set user in local storage as string
    this.authToken = token; // Assign token to be used elsewhere
    this.user = user; // Set user to be used elsewhere
  }

  // Function to get user's profile data
  // getProfile() {
  //   this.createAuthenticationHeaders(); // Create headers before sending to API
  //   return this.http.get(this.HOST + 'authentication/profile', this.options).map(res => res.json());
  // }

  // Function to check if user is logged in
  // loggedIn() {
  //   return tokenNotExpired();
  // }

}
