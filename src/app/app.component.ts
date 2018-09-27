import { Component, OnInit } from '@angular/core';
import { UserService } from './core/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'airtime-frontend';
  constructor(
    private userService:UserService
  ){}
  ngOnInit() {
    /**
     * When the user first launches the app
     * populate method will be executed
     * based on the token stored in local storage, it willl fetch data
     * and set the authenticatedSubject
     */
    this.userService.populate();
  }
}
