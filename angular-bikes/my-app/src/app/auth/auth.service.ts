import {Injectable} from "@angular/core";

@Injectable({providedIn: 'root'})
export class AuthService {
  login(){
    localStorage.setItem('isUserLogIn', 'true');
  }
  logout(){
    localStorage.setItem('isUserLogIn', 'false');
  }
  isAuthenticated(): Promise<boolean>{
    return new Promise(resolve => {
      let json = localStorage.getItem('isUserLogIn');
      const isAuth = JSON.parse(json || "null");
      resolve(isAuth)
    })
  }
}
