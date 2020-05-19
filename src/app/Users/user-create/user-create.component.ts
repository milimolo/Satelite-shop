import { Component, OnInit } from '@angular/core';
import {UserService} from '../shared/user.service';
import {AuthService} from '../../Shared/Services/auth.service';
import {FormBuilder} from '@angular/forms';
import {User} from '../shared/user.model';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  userForm = this.fb.group({
    uid: [''],
    displayName: [''],
    address: [''],
    zipCode: [''],
    city: [''],
    photoURL: [''],
    email: [''],
    password: ['']
  });
  constructor(private userSerivce: UserService,
              private authService: AuthService,
              private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const user = this.userForm.value;
    this.authService.SignUp(user.email, user.password)
      .then(ref => {
        const newUser: User = {
          uid: ref.user.uid,
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL,
          address: user.address,
          isAdmin: false,
          zipCode: user.zipCode,
          city: user.city
        };
        this.userSerivce.createUser(newUser)
          .subscribe(() => {
            console.log('User created succesfully: ' + newUser.uid);
          });
      });
  }

}
