import { Component, OnInit } from '@angular/core';
import {AuthService} from '../Shared/Services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  constructor(public auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }
  signUp() {
    this.router.navigate(['/user/sign-up']);
  }
  signIn() {
    this.auth.SignInEmailAndPassword(this.email, this.password);
    this.router.navigate(['/user/your-page']);
    this.email = '';
    this.password = '';
  }

  signInWithGoogle() {
    this.auth.googleSignIn()
      .then(() => {
        this.router.navigate(['/user/your-page']);
      });
  }
}
