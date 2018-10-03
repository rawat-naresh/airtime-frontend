import { Component, OnInit } from '@angular/core';
import { UserService } from '../../core/services/user.service';
import { Router } from '@angular/router';
import { User } from '../../core/model/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentUser:User;
  constructor(private userService:UserService,private router:Router) { 
    
    
  }

  ngOnInit() {
    this.userService.currentUser.subscribe(user => {
      this.currentUser = user;
    });
    
  }

  logout(){
    this.userService.purgeAuth();
      this.router.navigateByUrl('/');
  }

}
