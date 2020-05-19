import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../Shared/Services/auth.service';
import {User} from '../shared/user.model';
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {

  user: User;
  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
    this.getLoggedInUser();
  }

  getLoggedInUser() {
    this.authService.user$
      .subscribe(user => this.user = user);
  }

  signOut() {
    this.authService.signOut()
      .then(() => {
        this.router.navigate(['']);
      });
  }

}
