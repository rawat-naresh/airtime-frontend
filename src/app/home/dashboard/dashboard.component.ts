import { Component } from '@angular/core';
import { TweetService } from '../../core/services/tweet.service';
import { FormControl, Validators} from '@angular/forms';
import { error } from '@angular/compiler/src/util';
import {MessageService} from 'primeng/api';
@Component({
    selector:'app-home-dashboard',
    templateUrl:'./dashboard.component.html',
    styleUrls:['./dashboard.component.css']
})
export class DashboardComponent {
    statusControl:FormControl;
    constructor(
        private tweetService:TweetService,
        private messageService: MessageService,
    ){
        this.statusControl = new FormControl('', Validators.required);
    }

    postTweet(){
        if(this.statusControl.valid){
            let tweet = this.processTweet(this.statusControl.value);
            this.tweetService.postTweet(tweet).subscribe(data=>{
                console.log("posted");
                this.statusControl.reset;
                this.addSingle();
                
            },
            (error) => {

            }
        )
        }
    }

    processTweet(tweet:string){
        let words = tweet.split(" ");
        let hashTags = [];
        let mentions = [];
        for(let w of words) {
            if(w.charAt(0) == "#") {
                hashTags.push(w.slice(1));
            }
            else if(w.charAt(0) == '@') {
                mentions.push(w.slice(1));
            }
        } 
        return {body:tweet,htags:hashTags,mentions:mentions};
    }


    addSingle() {
        this.messageService.add({severity:'success', summary:'Tweet Posted!'});
    }
    clear() {
        this.messageService.clear();
    }

}