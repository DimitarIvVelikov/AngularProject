// import { Injectable } from '@angular/core';
// import {
//   ActivatedRouteSnapshot,
//   CanActivate,
//   Router,
//   RouterStateSnapshot,
//   UrlTree,
// } from '@angular/router';
// import { Observable } from 'rxjs';
// import { UserService } from '../user/user.service';
// import { canActivate } from '../shared/utils/canActivate';

// @Injectable({ providedIn: 'root' })
// export class AuthDeactivate implements CanActivate {
//   constructor(private userService: UserService, private router: Router) {}
//   canActivate(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot
//   ):
//     | boolean
//     | UrlTree
//     | Observable<boolean | UrlTree>
//     | Promise<boolean | UrlTree> {
//     return canActivate(route, state);
//   }
// }
