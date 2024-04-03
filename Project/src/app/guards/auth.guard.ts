import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable, tap } from 'rxjs';
import { UserService } from '../user/user.service';

@Injectable({ providedIn: 'root' })
export class AuthActivate implements CanActivate {
  constructor(private userService: UserService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    // const profile = this.userService.getProfile().subscribe((user) => {
    //   console.log(user);

    //   if (this.userService.isLoggedIn && route.routeConfig?.path === 'login') {
    //     this.router.navigate(['/home']);
    //     return false;
    //   } else if (
    //     this.userService.isLoggedIn &&
    //     route.routeConfig?.path === 'register'
    //   ) {
    //     this.router.navigate(['/home']);
    //     return false;
    //   } else if (
    //     !this.userService.isLoggedIn &&
    //     route.routeConfig?.path === 'create'
    //   ) {
    //     this.router.navigate(['/login']);
    //     return false;
    //   } else if (
    //     !this.userService.isLoggedIn &&
    //     route.routeConfig?.path === 'profile'
    //   ) {
    //     this.router.navigate(['/login']);
    //     return false;
    //   }
    //   return true;
    // });
    // console.log('Profile: ', profile);

    // return !!profile;
    return this.userService.isLoggedIn;
  }
}
