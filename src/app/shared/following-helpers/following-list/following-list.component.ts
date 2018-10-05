import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-following-list',
  templateUrl: './following-list.component.html',
  styleUrls: ['./following-list.component.css']
})
export class FollowingListComponent implements OnInit {
  followingList:Object[];
  username:string;
  constructor(
    private userService:UserService,
    private route:ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.parent.params.subscribe((params)=>{
      this.username = params['username'];
    });
    this.userService.getFollowings(this.username).subscribe(
      (data) => {
        this.followingList = data;
      }
    );
  }

  removeFollowing(user) {
    let index = this.followingList.indexOf(user);
    this.followingList.splice(index,1);
  }

  addFollowing(user) {
    //let index = this.followingList.indexOf(user);
    this.followingList.push(user);
  }

}
