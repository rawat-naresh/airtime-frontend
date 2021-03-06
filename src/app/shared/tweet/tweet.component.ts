import { Component, OnInit, Input } from '@angular/core';
import { Tweet } from '../../core/model/tweet.model';
import { TweetService } from '../../core/services/tweet.service';
import { UserService } from '../../core/services/user.service';
import { of } from 'rxjs';
import { concatMap,tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { User } from '../../core/model/user.model';
import { Comment } from '../../core/model/comment.model';

import { FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css']
})
export class TweetComponent implements OnInit {

  @Input() tweet:Tweet;
  // @Input() userInfo:Object;
  likedBy:User;
  showComments:boolean = false;
  showLikedBy:boolean = false;
  showRetweetedBy:boolean = false;
  commentControl:FormControl;
  userComments:Comment[];
  constructor(
    private tweetService:TweetService,
    private userService:UserService,
    private router:Router,
  ) { }
  ngOnInit() {
    this.commentControl = new FormControl('',Validators.required);
  }

  postComment(tweetId){
    if(this.commentControl.valid) {
      this.tweetService.postComment(tweetId,this.commentControl.value).subscribe(
        data=>{
          this.userComments = data;
          // console.log(this.userComments);
          //updata likedCount
          this.tweet.tweet.commentsCount = data.length;
          //reset the comment
          // console.log("-o-o--o-o-");
          // console.log(this.tweet.commentsCount);
          this.commentControl.reset();
        }
      )
    }
  }

  toggleShowComments(tweetId){
    this.showLikedBy = false;
    this.showRetweetedBy = false;
    this.showComments = !this.showComments;
    if(this.showComments) {
      this.getComments(tweetId);
    }
  }

  toggleShowLikes(tweetId){
    this.showComments = false;
    this.showRetweetedBy = false;
    this.showLikedBy = !this.showLikedBy;
    if(this.showLikedBy)
      this.getLikedBy(tweetId);
  }

  toggleShowRtweetedBy(){
    this.showLikedBy = false;
    this.showComments = false;
    this.showRetweetedBy = !this.showRetweetedBy;
  }

  getComments(tweetId) {
    this.tweetService.getComments(tweetId).subscribe((data)=> {
      this.userComments = data;
    });
  }

  getLikedBy(tweetId) {
    this.tweetService.getLikedBy(tweetId).subscribe((data) =>{
       this.likedBy = data;
      console.log(data);
    })
  }

  toggleLikeTweet(tweetId) {
    this.userService.isAuthenticated.pipe(
      concatMap((authenticated) => {
        if(!authenticated) {
          this.router.navigateByUrl('');
          return of(null)
        }

        if(!this.tweet.tweet.isLiked) {
          return this.tweetService.likeTweet(tweetId).pipe(
            tap(
              data=>{
                this.tweet.tweet.likesCount = data;
                this.tweet.tweet.isLiked = true;
              }
            )
          )
        }

        else {
          return this.tweetService.dislikeTweet(tweetId).pipe(
            tap(
              data =>{
                this.tweet.tweet.likesCount = data;
                this.tweet.tweet.isLiked= false;
              }
            )
          )
        }

      })
      //concatmap ends here
    ).subscribe();
    
    
  }

  toggleRTweet(tweetId) {
    this.userService.isAuthenticated.pipe(
      concatMap((authenticated) => {
        if(!authenticated) {
          this.router.navigateByUrl('');
          return of(null)
        }

        if(!this.tweet.tweet.isRetweeted) {
          return this.tweetService.doRetweet(tweetId).pipe(
            tap(
              data=>{
                this.tweet.tweet.reTweetsCount = data;
                this.tweet.tweet.isRetweeted = true;
              }
            )
          )
        }

        else {
          return this.tweetService.undoRetweet(tweetId).pipe(
            tap(
              data =>{
                this.tweet.tweet.reTweetsCount = data;
                this.tweet.tweet.isRetweeted= false;
              }
            )
          )
        }

      })
      //concatmap ends here
    ).subscribe();
    
    
  }


}
  