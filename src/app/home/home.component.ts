import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [LoginService]
})
export class HomeComponent implements OnInit {

  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onLogout() {
    this.loginService.logout();
    console.log('logout..');
    this.router.navigate(['/']);
  }
}
