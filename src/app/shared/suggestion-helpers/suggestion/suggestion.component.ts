import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { UserService } from '../../../core/services/user.service';

@Component({
  selector: 'app-suggestion',
  templateUrl: './suggestion.component.html',
//   styleUrls: ['./suggestion-list.component.css']
})
export class SuggestionComponent implements OnInit {
  isFollowed:boolean = false;
  @Input() suggestion:Object;
  @Output() followed = new EventEmitter<Object>();
  constructor(
    private userService:UserService
  ) { }

  ngOnInit() {
    
  }

  followUser(username) {
    this.userService.followUser(username).subscribe(
      (data) => {
        //get following count in data.
        this.isFollowed = true;
        this.followed.emit(this.suggestion);
      }
    );
  }
}
