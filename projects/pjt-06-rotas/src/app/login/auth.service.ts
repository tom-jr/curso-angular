import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userAuth: boolean = false;
  showMenu = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  login(user: User) {
    if (user.email === 'tom@gmail.com' &&
      user.senha === 'admin'
    ) {
      this.userAuth = true;
      this.showMenu.emit(this.userAuth);
      this.router.navigate(['/']);
    }
  }

  getUserAuth(){
    return this.userAuth;
  }
}
