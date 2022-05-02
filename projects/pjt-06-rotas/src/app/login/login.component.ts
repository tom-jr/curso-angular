import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { User } from './model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user:User = new User();
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  login(){
    console.log(this.user);
    this.authService.login(this.user);
  }
}
