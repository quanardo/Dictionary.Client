import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from '../../environments/environment.prod';



@Injectable()
export class RegisterService {

  // private HOST = '//localhost:3000';

  constructor(
    private http: HttpClient
  ) { }

  registerUser(user) {
    return this.http.post(env.api + '/auth/register', user)
    // .map(res => res.json());
  }

}
