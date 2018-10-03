import { Component, OnInit } from '@angular/core';
import { TweetService } from '../../core/services/tweet.service';
import { ActivatedRoute } from '@angular/router';
import { Tweet } from '../../core/model/tweet.model';

@Component({
  selector: 'app-tweet-list',
  templateUrl: './tweet-list.component.html',
  styleUrls: ['./tweet-list.component.css']
})
export class TweetListComponent implements OnInit {
  postedTweets:Tweet[];
  // userInfo:Object = {} as Object ;

  constructor(
    private tweetService:TweetService,
    private route:ActivatedRoute
    ) { }

  ngOnInit() {
    this.route.parent.params.subscribe(params => {
      
      this.tweetService.getTweets(params['username']).subscribe(
        data => {this.postedTweets = data;
        console.log(data)}
      )
    });
    
  }

}
