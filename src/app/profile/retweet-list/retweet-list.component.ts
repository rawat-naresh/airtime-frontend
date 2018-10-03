import { Component, OnInit } from '@angular/core';
import { TweetService } from '../../core/services/tweet.service';
import { ActivatedRoute } from '@angular/router';
import { Tweet } from '../../core/model/tweet.model';

@Component({
  selector: 'app-retweet-list',
  templateUrl: './retweet-list.component.html',
  styleUrls: ['./retweet-list.component.css']
})
export class ReTweetListComponent implements OnInit {
  reTweets:Tweet[];
  // userInfo:Object = {} as Object ;

  constructor(
    private tweetService:TweetService,
    private route:ActivatedRoute
    ) { }

  ngOnInit() {
    this.route.parent.params.subscribe(params => {
      
      this.tweetService.getReTweets(params['username']).subscribe(
        data => {
          this.reTweets = data;
        console.log(data)
      }
      )
    });
    
  }

}
