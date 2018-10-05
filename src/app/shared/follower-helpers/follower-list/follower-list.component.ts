import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-follower-list',
  templateUrl: './follower-list.component.html',
  styleUrls: ['./follower-list.component.css']
})
export class FollowerListComponent implements OnInit {

  followerList:Object[];
  username:string;
  constructor(
    private userService:UserService,
    private route:ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.parent.params.subscribe((params)=>{
      this.username = params['username'];
    });
    this.userService.getFollowers(this.username).subscribe(
      (data) => {
        this.followerList = data;
      }
    );
  }

}
