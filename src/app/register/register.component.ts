import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [RegisterService]
})
export class RegisterComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private registerService: RegisterService
  ) {
    this.createForm();
  }

  createForm() {
    this.form = this.formBuilder.group({
      email: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      confirm: ['', Validators.required]
    });
  }

  registerUser() {
    const user = {
      email: this.form.get('email').value,
      username: this.form.get('username').value,
      password: this.form.get('password').value
    };
    this.registerService.registerUser(user).subscribe((data: any) => {
      if (!data.success) {
        console.log('fail');
      } else {
        console.log('success');
      }
    }, (err) => {
      console.log(err);
    });
  }

  ngOnInit() {
  }

}
