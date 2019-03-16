import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AuthService } from './auth.service';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  providers: [AuthService]
})
export class AuthComponent implements OnInit {

  form: FormGroup;
  processing = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {
    this.createForm();
  }


  createForm() {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  disableForm() {
    this.form.controls['username'].disable();
    this.form.controls['password'].disable();
  }

  enableForm() {
    this.form.controls['username'].enable();
    this.form.controls['password'].enable();
  }

  loginUser() {
    this.processing = true;
    this.disableForm();
    const user = {
      username: this.form.get('username').value,
      password: this.form.get('password').value
    };

    this.authService.login(user).subscribe((data: any) => {
      if (!data.success) {
        console.log('Login failed');
      } else {
        console.log('Logined');
        this.authService.storeUserData(data.token, data.user);
      }
    }, (err) => {
      console.log(err);
    });
  }


  ngOnInit() {
  }

}
