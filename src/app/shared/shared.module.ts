import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FollowerComponent } from './follower-helpers/follower/follower.component';
import { FollowerListComponent } from './follower-helpers/follower-list/follower-list.component';
import { FollowingComponent } from './following-helpers/following/following.component';
import { FollowingListComponent } from './following-helpers/following-list/following-list.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { TweetComponent } from './tweet-helpers/tweet/tweet.component';
import { TweetListComponent } from './tweet-helpers/tweet-list/tweet-list.component';
import { TrendingComponent } from './trending-helpers/trending/trending.component';
import { TrendingListComponent } from './trending-helpers/trending-list/trending-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FollowerComponent, FollowerListComponent, FollowingComponent, FollowingListComponent, FooterComponent, HeaderComponent, TweetComponent, TweetListComponent, TrendingComponent, TrendingListComponent]
})
export class SharedModule { }
