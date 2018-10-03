import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileRoutingModule } from './profile.routing.module';
import { ProfileComponent } from './profile.component';
import { SharedModule } from '../shared/shared.module';
import { ProfileResolver } from './profile-resolver.service';
import { TweetListComponent } from './tweet-list/tweet-list.component';
import { LikesListComponent } from './likes-list/likes-list.component';
import { ReTweetListComponent } from './retweet-list/retweet-list.component';

@NgModule({
  imports: [
    SharedModule,
    ProfileRoutingModule,
  ],
  declarations: [
    ProfileComponent,
    TweetListComponent,
    LikesListComponent,
    ReTweetListComponent,
  ],
  providers:[ProfileResolver]
})
export class ProfileModule { }
