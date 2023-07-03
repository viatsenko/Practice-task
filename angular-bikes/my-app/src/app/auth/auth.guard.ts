import {Injectable} from "@angular/core";
import {AuthService} from "./auth.service";
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from "rxjs";

@Injectable({providedIn: 'root'})
export class AuthGuard {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.isAuthenticated().then(isAuth => {
      if (isAuth){
        return true
      }
      else {
        return this.router.navigate(['/'], {
          queryParams: {auth: false}
        })
      }
    })
  }

}
