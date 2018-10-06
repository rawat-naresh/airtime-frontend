import { Injectable } from '@angular/core'
import { CanActivate } from '@angular/router';
import { UserService } from './user.service';
import { take} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
export class AuthGuard implements CanActivate{

    constructor(private userService:UserService){

    }
    canActivate(
        route:ActivatedRouteSnapshot,
        state:RouterStateSnapshot,
    ):Observable<boolean>{
        return this.userService.isAuthenticated.pipe(take(1));
    }
}