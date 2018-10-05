import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { UserService } from '../../../core/services/user.service';
import { ProfilesService } from 'src/app/core/services/profiles.service';

@Component({
  selector: 'app-suggestion',
  templateUrl: './suggestion.component.html',
//   styleUrls: ['./suggestion-list.component.css']
})
export class SuggestionComponent implements OnInit {
  @Input() suggestion:Object;
  @Output() followed = new EventEmitter<Object>();
  constructor(
    private userService:UserService,
    private profileService:ProfilesService
  ) { }

  ngOnInit() {
    
  }

  followUser(username) {
    this.userService.followUser(username).subscribe(
      (data) => {
        //get following count in data.
        this.followed.emit(this.suggestion);
        this.profileService.followingReplaySubject.next(data);
      }
    );
  }
}
