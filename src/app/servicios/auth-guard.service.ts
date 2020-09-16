import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private authService: AuthService, public router: Router) { }

  canActivate(): boolean {
    if(!this.authService.isLoggedIn){
      this.router.navigate(['/Principal']);
      return false;
    }
    return true;
  }
}
