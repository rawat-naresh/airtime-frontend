import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { TweetListComponent } from '../shared/tweet-helpers/tweet-list/tweet-list.component';
import { ProfileResolver } from './profile-resolver.service';

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
            // {
            //     path:'likes',
            //     component:TweetComponent,

            // }
        ], 
    }
    
];
@NgModule({
    imports:[RouterModule.forChild(profileRoutes)],
    exports:[RouterModule]
})
export class ProfileRoutingModule {
    
}