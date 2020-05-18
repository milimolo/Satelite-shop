import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../Shared/Services/auth.service';
import {User} from "../../Users/shared/user.model";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user: User
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.getLoggedInUser();
  }

  getLoggedInUser() {
    this.authService.user$
      .subscribe(user => {
        this.user = user;
      });
  }

}
