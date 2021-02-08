import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, of } from "rxjs";
import { delay } from 'rxjs/operators';
import { UserApi } from "src/fw/users/user-api";

@Injectable()
export class UserService implements UserApi {

    isAuthenticated: boolean = false;

    constructor(private router: Router) {}

    signIn(username: string, password: string, rememberMe: boolean): Observable<any> {
        console.log('UserService.signIn: ' + username + ' ' + password + ' ' + rememberMe);
        this.isAuthenticated = true;
        return of({}).pipe(delay(2000));
    }

    signOut(): Observable<any> {
        this.isAuthenticated = false;
        this.router.navigate(['/signin']);
        return of({});
    };
}