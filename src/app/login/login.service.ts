import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class LoginService {
  isLogged = false;
  constructor(private router: Router) { }

  login() {
    this.isLogged = true;
    this.router.navigate(['/movies']);
  }

  logout() {
    this.isLogged = false;
    this.router.navigate(['/login']);
  }

}
