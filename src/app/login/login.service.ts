import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class LoginService {
  constructor(private router: Router) { }

  login(loginObj: any) {
    const authObj = {
      'username': loginObj.username,
      'isLogged': true,
    };

    const objStr = JSON.stringify(authObj);
    localStorage.removeItem('authInfo');
    localStorage.setItem('authInfo', objStr);
    this.router.navigate(['/movies']);
  }

  logout() {
    localStorage.removeItem('authInfo');
    this.router.navigate(['/login']);
  }

  getUserInfo() {
    const authStr = localStorage.getItem('authInfo');
    let authObj = null;
    if (authStr) {
      authObj = JSON.parse(authStr);
    }
    return authObj;
  }
}
