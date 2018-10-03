import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProfileComponent } from './profile.component';
import { TweetListComponent } from './tweet-list/tweet-list.component';
import { LikesListComponent } from './likes-list/likes-list.component';

import { ProfileResolver } from './profile-resolver.service';
import {ReTweetListComponent } from './retweet-list/retweet-list.component';
const profileRoutes:Routes = [
    {
        path:':username',
        component:ProfileComponent,
        resolve:{
            profile:ProfileResolver
        },
        children:[
            {
                path:'',
                component:TweetListComponent,
                pathMatch:'full',
            },
            {
                path:'likes',
                component:LikesListComponent,
            },
            {
                path:'re-tweets',
                component:ReTweetListComponent,
            }
        ], 
    }
    
];
@NgModule({
    imports:[RouterModule.forChild(profileRoutes)],
    exports:[RouterModule]
})
export class ProfileRoutingModule {
    
}