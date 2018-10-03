import { Component, OnInit } from '@angular/core';
import { TweetService } from '../../core/services/tweet.service';
import { ActivatedRoute } from '@angular/router';
import { Tweet } from '../../core/model/tweet.model';

@Component({
  selector: 'app-likes-list',
  templateUrl: './likes-list.component.html',
  styleUrls: ['./likes-list.component.css']
})
export class LikesListComponent implements OnInit {
  likedTweets:Object[];

  constructor(
    private tweetService:TweetService,
    private route:ActivatedRoute
    ) { }

  ngOnInit() {
    this.route.parent.params.subscribe(params => {
      
      this.tweetService.getLikedTweets(params['username']).subscribe(
        data => {
          console.log("LIKED TWEETS:",data);
          this.likedTweets = data;
        },
        error =>{
          console.log(error);
        }
      )

    });
    
  }

}
