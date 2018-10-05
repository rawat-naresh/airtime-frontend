import { Component, OnInit,Input, Output ,EventEmitter} from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';
import { ProfilesService } from 'src/app/core/services/profiles.service';

@Component({
  selector: 'app-following',
  templateUrl: './following.component.html',
  styleUrls: ['./following.component.css']
})
export class FollowingComponent implements OnInit {
  @Input() user:Object;
  @Output() userFollowEvent = new EventEmitter<Object>();
  @Output() userUnfollowEvent = new EventEmitter<Object>();
  
  constructor(
    private userService:UserService,
    private profileService:ProfilesService,
  ) { }

  ngOnInit() {
  }

  unfollowUser(username){
    this.userService.unfollowUser(username).subscribe(
      data => {
        this.user.isFollowing = false;
        
        this.userUnfollowEvent.emit(this.user);
        this.profileService.followingReplaySubject.next(data);
      }
    );
  }

  followUser(username) {
    // console.log("dfd");
    this.userService.followUser(username).subscribe(
      (data) => {
        this.user.isFollowing = true;
        //get following count in data.
        this.userFollowEvent.emit(this.user);
        this.profileService.followingReplaySubject.next(data);
      }
    );
  }

}
