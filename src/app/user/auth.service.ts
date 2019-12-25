import { Injectable } from '@angular/core';
import { IUser } from './user.model';
import { Router } from '@angular/router';

@Injectable()

export class AuthService {
currentUser: IUser;

constructor(private router: Router) {}

loginUser(userName: string, password: string) {
  this.currentUser = {
    id: 1,
    firstName: 'Solomon',
    lastName: 'Kings',
    userName: userName
  };
}

updateProfile(firstName: string, lastName: string) {
  this.currentUser.firstName = firstName;
  this.currentUser.lastName = lastName;
  this.router.navigate(['events']);
}
isAuthenticated() {
  return !!this.currentUser;
}
}
