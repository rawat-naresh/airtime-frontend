import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'tweetSplitter' })
export class TweetSplitterPipe implements PipeTransform {
  transform(tweet) {
    return tweet.split(" ");
  }
}