import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate  {

  currentUser: any;
  constructor(private router: Router) {

  }
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    debugger;
    console.log(this.router.url);
    this.currentUser = localStorage.getItem('loginId');
    if (this.currentUser) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}
