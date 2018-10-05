import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, ReplaySubject } from 'rxjs';
import { distinctUntilChanged,tap,map } from 'rxjs/operators';

import { ApiService } from './api.service';
import { JwtService } from './jwt.service';
import { User } from '../model/user.model';

@Injectable()
export class UserService {
    private currentUserSubject = new BehaviorSubject<User>({} as User);
    public currentUser = this.currentUserSubject.asObservable().pipe(distinctUntilChanged());

    private isAuthenticatedSubject = new ReplaySubject<boolean>(1);
    public isAuthenticated = this.isAuthenticatedSubject.asObservable();

    constructor(
        private apiService:ApiService,
        private jwtService:JwtService,
    ){}

    populate() {
        if(this.jwtService.getToken()) {
            // console.log("------------------Populate-------:",this.jwtService.getToken());
            this.apiService.get('/user')
                .subscribe(
                    data => this.setAuth(data.user),
                    err => this.purgeAuth()
                );
        } else {
            this.purgeAuth();
        }
    }

    setAuth(user:User) {
        this.jwtService.saveToken(user.token);
        this.currentUserSubject.next(user);
        this.isAuthenticatedSubject.next(true);
    }

    purgeAuth(){
        this.jwtService.destroyToken();
        this.currentUserSubject.next({} as User);
        this.isAuthenticatedSubject.next(false);    
    }

    getCurrentUser():User{
        return this.currentUserSubject.value;
    }

    attemptAuth(credentials):Observable<User> {
        //API require data enclosed in 'user' object {user:credentials} 
        return this.apiService.post('/users/login',{user:credentials})
            .pipe(
                tap(data => this.setAuth(data.user))
            );
    }

    checkUser(username) {
        return this.apiService.get('/users/check/'+ username);
    }

    signup(details):Observable<User>{
        return this.apiService.post('/users/signup',{user:details});
    }


    getFollowSuggestions() {
        return this.apiService.get('/users/follow-suggestions').pipe(
            map(data => data.suggestions)
        );
    }

    followUser(username) {
        return this.apiService.put(`/users/${username}/follow`).pipe(
            map( (data)=>data.followingCount)

        );
    }

    unfollowUser(username) {
        return this.apiService.delete(`/users/${username}/unfollow`).pipe(
            map((data)=>data.followingCount)
        );
    }

    getFollowings(username) {
        return this.apiService.get(`/users/${username}/following`).pipe(
            map((data) => data.following)
        );
    }

    getFollowers(username) {
        return this.apiService.get(`/users/${username}/followers`).pipe(
            map((data) => data.followers)
        );
    }
} 