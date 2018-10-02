import { Component, OnInit } from '@angular/core';
import { Profile } from '../core/model/profile.model';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../core/services/user.service';
import { concatMap,tap } from 'rxjs/operators';
@Component({
    selector:'app-profile',
    templateUrl:'./profile.component.html',
    styleUrls:['./profile.component.css']
})
export class ProfileComponent implements OnInit {
    profile:Profile;

    constructor(
        private route:ActivatedRoute,
        private userService:UserService,
        ){}
    ngOnInit(){
        this.route.data.pipe(
            // concatMap((data:{profile: Profile}) => {
            //     this.profile = data.profile
            // })
            tap((data)=>{
                console.log(data);
                this.profile = data.profile;
            })
        ).subscribe();
    }



}