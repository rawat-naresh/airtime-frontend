import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../core/services/user.service';

@Component({
  selector: 'app-suggestion-list',
  templateUrl: './suggestion-list.component.html',
  styleUrls: ['./suggestion-list.component.css']
})
export class SuggestionListComponent implements OnInit {
  suggestions:Object[] = [];
  constructor(
    private userService:UserService
  ) { }

  ngOnInit() {
    this.fetchSuggestions();
  }

  fetchSuggestions() {

    this.userService.getFollowSuggestions().subscribe(
      (data) => {
        //list of suggestions
        this.suggestions = data;
      }
    );
  }

  removeSuggestion(suggestion) {
    let followedIndex = this.suggestions.indexOf(suggestion);
    this.suggestions.splice(followedIndex,1);

  }

}
