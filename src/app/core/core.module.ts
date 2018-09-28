import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http'; 
import { HttpTokenInterceptor } from './interceptors/http.token.interceptor';
import { ApiService } from './services/api.service';
import { JwtService } from './services/jwt.service';
import { UserService } from './services/user.service';
import { TweetService } from './services/tweet.service';
import {MessageService} from 'primeng/api';



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers:[
    { provide: HTTP_INTERCEPTORS, useClass:HttpTokenInterceptor, multi:true},
    ApiService,
    JwtService,
    UserService,
    TweetService,
    MessageService,
  ]
})
export class CoreModule { }
