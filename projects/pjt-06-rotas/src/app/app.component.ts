import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from './login/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  ShowMenu:boolean = false;
  subscription!: Subscription;
  title = 'pjt-06-rotas';

  constructor(private authService: AuthService){

  }

  ngOnInit(): void {
      this.authService.showMenu.subscribe((subscribeValue)=>{
        this.ShowMenu = subscribeValue;
      });
  }

}
