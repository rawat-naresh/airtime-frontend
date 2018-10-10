/* Library Imports  */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common/';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import {ToastModule} from 'primeng/toast';

import { FollowerComponent } from './follower-helpers/follower/follower.component';
import { FollowerListComponent } from './follower-helpers/follower-list/follower-list.component';
import { FollowingComponent } from './following-helpers/following/following.component';
import { FollowingListComponent } from './following-helpers/following-list/following-list.component';
/*import { FooterComponent } from './footer/footer.component';
import { TrendingComponent } from './trending-helpers/trending/trending.component';
import { TrendingListComponent } from './trending-helpers/trending-list/trending-list.component';*/
import { TweetComponent } from './tweet/tweet.component';
import { TweetSplitterPipe } from './tweet/tweet-splitter.pipe';
import { HeaderComponent } from './header/header.component';
import { ShowAuthedDirective } from './show-authed.directive';
import { FooterComponent } from './footer/footer.component';
import { TrendingListComponent } from './trending-helpers/trending-list/trending-list.component';
import { SuggestionListComponent } from './suggestion-helpers/suggestion-list/suggestion-list.component';
import { SuggestionComponent } from './suggestion-helpers/suggestion/suggestion.component';

import { UserIntroComponent } from './user-intro/user-intro.component';
// import { FollowComponent } from './buttons/follow/follow.component';
// import { UnfollowComponent } from './buttons/unfollow/unfollow.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    ToastModule,
    // BrowserAnimationsModule
  ],
  declarations: [
    FollowerComponent, 
    FollowerListComponent, 
    FollowingComponent, 
    FollowingListComponent, 
    //FooterComponent, 
    //TrendingComponent, 
    TweetComponent, 
    HeaderComponent, 
    TrendingListComponent ,
    FooterComponent,
    SuggestionListComponent,
    SuggestionComponent,
    UserIntroComponent,
    ShowAuthedDirective,
    TweetSplitterPipe,
    // FollowComponent,
    // UnfollowComponent
  ],
  exports:[
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    HeaderComponent,
    FooterComponent,
    TrendingListComponent,
    SuggestionListComponent,
    UserIntroComponent,
    TweetComponent,
    FollowerComponent, 
    FollowerListComponent, 
    FollowingComponent, 
    FollowingListComponent, 
    ShowAuthedDirective,
    TweetSplitterPipe,
    // BrowserAnimationsModule,
    ToastModule,

  ]
  
})

export class SharedModule { }
