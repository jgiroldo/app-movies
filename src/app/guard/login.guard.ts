import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { LoginService } from '../login/login.service';

@Injectable()
export class LoginGuard implements CanActivate {
  constructor(private loginSvc: LoginService, private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    const authStr = localStorage.getItem('authInfo');
    let authObj = null;
    if (authStr) {
      authObj = JSON.parse(authStr);
    }
    if (authObj && authObj.isLogged) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
