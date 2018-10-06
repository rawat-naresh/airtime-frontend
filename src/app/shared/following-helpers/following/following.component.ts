import { Component, OnInit,Input, Output ,EventEmitter} from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';
import { ProfilesService } from 'src/app/core/services/profiles.service';
import { of } from 'rxjs';
import { tap, concatMap } from 'rxjs/operators';
import { Router } from '@angular/router'

@Component({
  selector: 'app-following',
  templateUrl: './following.component.html',
  styleUrls: ['./following.component.css']
})
export class FollowingComponent implements OnInit {
  @Input() user;
  @Output() userFollowEvent = new EventEmitter<Object>();
  @Output() userUnfollowEvent = new EventEmitter<Object>();
  
  constructor(
    private userService:UserService,
    private profileService:ProfilesService,
    private router:Router,
  ) { }

  ngOnInit() {
  }

  unfollowUser(username){

    this.userService.isAuthenticated.pipe(concatMap((authenticated) => {
      if(!authenticated){
        this.router.navigateByUrl('');
        return of(null);
      }

      return this.userService.unfollowUser(username).pipe(
        tap(data => {
          this.user.isFollowing = false;
          
          this.userUnfollowEvent.emit(this.user);
          this.profileService.followingReplaySubject.next(data);
        })
      );
        })
    ).subscribe();
  }

  followUser(username) {
    this.userService.isAuthenticated.pipe(concatMap((authenticated) => {
      if(!authenticated){
        this.router.navigateByUrl('');
        return of(null);
      }
      
      return this.userService.followUser(username).pipe(
        tap((data) => {
          this.user.isFollowing = true;
          //get following count in data.
          this.userFollowEvent.emit(this.user);
          this.profileService.followingReplaySubject.next(data);
        })
      );
    })).subscribe();

  }

}
