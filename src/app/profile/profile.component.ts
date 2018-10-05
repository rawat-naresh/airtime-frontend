import { Component, OnInit } from '@angular/core';
import { Profile } from '../core/model/profile.model';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../core/services/user.service';
import { concatMap,tap } from 'rxjs/operators';
import { ReplaySubject } from 'rxjs/internal/ReplaySubject';
import { ProfilesService } from 'src/app/core/services/profiles.service';
import { Observable } from 'rxjs/internal/Observable';
@Component({
    selector:'app-profile',
    templateUrl:'./profile.component.html',
    styleUrls:['./profile.component.css']
})
export class ProfileComponent implements OnInit {
    profile:Profile;
    followingCount$:Observable<number>;

    constructor(
        private route:ActivatedRoute,
        private userService:UserService,
        private profileService:ProfilesService,
        ){}
    ngOnInit(){
        this.followingCount$ = this.profileService.followingCount;
        this.route.data.pipe(
            
            tap((data)=>{
                 console.log(data.profile.isFollowing);
                this.profile = data.profile;
                this.profileService.followingReplaySubject.next(data.profile.followingCount );
            })
        ).subscribe();
    }



}