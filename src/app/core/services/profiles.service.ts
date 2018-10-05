import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from './api.service';
import { Profile } from '../model/profile.model';
import { map } from 'rxjs/operators';
import { ReplaySubject } from 'rxjs';

@Injectable()
export class ProfilesService {
  public followingReplaySubject = new ReplaySubject<number>(1);
  public followingCount = this.followingReplaySubject.asObservable();
  constructor (
    private apiService: ApiService
  ) {}

  get(username: string): Observable<Profile> {
    return this.apiService.get('/users/' + username)
      .pipe(map((data/*: {profile: Profile}*/) => data.profile));
  }

  follow(username: string): Observable<Profile> {
    return this.apiService.post('/users/' + username + '/follow');
  }

  unfollow(username: string): Observable<Profile> {
    return this.apiService.delete('/users/' + username + '/follow');
  }

}