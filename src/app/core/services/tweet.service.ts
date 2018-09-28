import { Injectable } from '@angular/core';


import { ApiService } from './api.service';
import { User } from '../model/user.model';

@Injectable()
export class TweetService {

    constructor(
        private apiService:ApiService,

    ){}

    postTweet(tweet){
        return this.apiService.post('/tweets/create',{tweet:tweet});
    }



} 