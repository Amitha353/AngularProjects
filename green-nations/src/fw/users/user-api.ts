import { Observable } from "rxjs";

export abstract class UserApi {
    signIn : (username: string, password: string, rememberMe: boolean) => Observable<any>;
    signOut: () => Observable<any>;
}