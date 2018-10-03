import { Injectable } from '@angular/core';


import { ApiService } from './api.service';
import { User } from '../model/user.model';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Tweet } from '../model/tweet.model';

@Injectable()
export class TweetService {

    constructor(
        private apiService:ApiService,

    ){}

    postTweet(tweet){
        return this.apiService.post('/tweets/create',{tweet:tweet});
    }

    getTweets(username) {
        console.log("GET TWEETS:",username);
        return this.apiService.get('/users/'+username+'/tweets')
            .pipe(map(data => data.tweets));
    } 

    getReTweets(username) {
        console.log("GET RE-TWEETS:",username);
        return this.apiService.get('/users/'+username+'/re-tweets')
            .pipe(map(data => data.reTweets));
    }

    getComments(tweetId) {
        return this.apiService.get(`/tweets/${tweetId}/comments`).pipe(map(data=>data.comments));
    }

    likeTweet(tweetId):Observable<number> {
        return this.apiService.put(`/tweets/${tweetId}/like`)
            .pipe(map(data=>data.tweetLikes));
    }

    dislikeTweet(tweetId):Observable<number> {
        return this.apiService.delete(`/tweets/${tweetId}/dislike`)
            .pipe(map(data=>data.tweetLikes));
    }

    getLikedBy(tweetId):Observable<User> {
        return this.apiService.get(`/tweets/${tweetId}/likes`)
            .pipe(map(data => data.likedBy));
    }

    postComment(tweetId,comment) {
        console.log(tweetId);
        return this.apiService.post(`/tweets/${tweetId}/comment`,{comment:comment})
            .pipe(map(data=>data.comments));
    }

    getLikedTweets(username) {
        return this.apiService.get(`/users/${username}/likes`).pipe(map(
            data => data.likedTweets
        ));
    }

    doRetweet(tweetId) {
        return this.apiService.post(`/tweets/${tweetId}/retweet`).pipe(map(
            data => data.rtcount
        ));
    }

    undoRetweet(tweetId) {
        return this.apiService.delete(`/tweets/${tweetId}/retweet`).pipe(map(
            data => data.rtcount
        ));
    }

} 