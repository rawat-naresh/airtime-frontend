import { Component, OnInit,Input } from '@angular/core';
import { Profile } from 'src/app/core/model/profile.model';
import { UserService } from 'src/app/core/services/user.service';
import { User } from 'src/app/core/model/user.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-intro',
  templateUrl: './user-intro.component.html',
  styleUrls: ['./user-intro.component.css']
})
export class UserIntroComponent implements OnInit {
  @Input() profile:Profile;
  currentUser:string
  constructor(private userService:UserService) { }

  ngOnInit() {
    this.userService.currentUser.subscribe(
      data => {
        this.currentUser = data.username;
      }
    )
  }

}
