import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthentificationService } from './authentification.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardAdminService implements CanActivate {

  constructor(private auth: AuthentificationService, private router: Router) { }
  
  canActivate() {
    if (!this.auth.isLoggedIn() || !this.auth.isAdmin()) {
      this.router.navigateByUrl('/');
      return false;
    }
    return true;
  }

}
