import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-follower',
  templateUrl: './follower.component.html',
  styleUrls: ['./follower.component.css']
})
export class FollowerComponent implements OnInit {
  @Input() follower:any;
  constructor() { }

  ngOnInit() {
  }

}
