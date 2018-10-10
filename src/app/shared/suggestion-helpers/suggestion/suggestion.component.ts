import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../core/services/user.service';
import { ProfilesService } from 'src/app/core/services/profiles.service';
import { concatMap,tap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-suggestion',
  templateUrl: './suggestion.component.html',
//   styleUrls: ['./suggestion-list.component.css']
})
export class SuggestionComponent implements OnInit {
  @Input() suggestion:any;
  @Output() followed = new EventEmitter<Object>();
  constructor(
    private userService:UserService,
    private profileService:ProfilesService,
    private router:Router,
  ) { }

  ngOnInit() {
    
  }

  followUser(username) {

    this.userService.isAuthenticated.pipe(concatMap((authenticated) => {
      if(!authenticated){
        this.router.navigateByUrl('');
        return of(null);
      }
      return this.userService.followUser(username).pipe(
        tap((data) => {
          //get following count in data.
          this.followed.emit(this.suggestion);
          this.profileService.followingReplaySubject.next(data);
        })
      );
    })).subscribe();
  }
}
