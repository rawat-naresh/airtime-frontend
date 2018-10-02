/* Library Imports  */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common/';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import {ToastModule} from 'primeng/toast';

/*import { FollowerComponent } from './follower-helpers/follower/follower.component';
import { FollowerListComponent } from './follower-helpers/follower-list/follower-list.component';
import { FollowingComponent } from './following-helpers/following/following.component';
import { FollowingListComponent } from './following-helpers/following-list/following-list.component';
import { FooterComponent } from './footer/footer.component';
import { TrendingComponent } from './trending-helpers/trending/trending.component';
import { TrendingListComponent } from './trending-helpers/trending-list/trending-list.component';*/
import { TweetListComponent } from './tweet-helpers/tweet-list/tweet-list.component';
import { TweetComponent } from './tweet-helpers/tweet/tweet.component';
import { HeaderComponent } from './header/header.component';
import { ShowAuthedDirective } from './show-authed.directive';
import { FooterComponent } from './footer/footer.component';
import { TrendingListComponent } from './trending-helpers/trending-list/trending-list.component';
import { SuggestionListComponent } from './suggestion-helpers/suggestion-list/suggestion-list.component';
import { TweetSplitterPipe } from './tweet-helpers/tweet/tweet-splitter.pipe';
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
   /*  FollowerComponent, 
    FollowerListComponent, 
    FollowingComponent, 
    FollowingListComponent, 
    FooterComponent, 
    TrendingComponent, */
    TweetListComponent, 
    TweetComponent, 
    HeaderComponent, 
    TrendingListComponent ,
    FooterComponent,
    SuggestionListComponent,
    ShowAuthedDirective,
    TweetSplitterPipe
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
    TweetComponent,
    TweetListComponent,
    ShowAuthedDirective,
    TweetSplitterPipe,
    // BrowserAnimationsModule,
    ToastModule,

  ]
  
})

export class SharedModule { }
