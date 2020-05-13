import { Component, OnInit } from '@angular/core';
import {AuthService} from '../Shared/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  constructor(public auth: AuthService) { }

  ngOnInit(): void {
  }
  signUp() {
    this.auth.SignUp(this.email, this.password);
    this.email = '';
    this.password = '';
  }
  signIn() {
    this.auth.SignInEmailAndPassword(this.email, this.password);
    this.email = '';
    this.password = '';
  }
}
