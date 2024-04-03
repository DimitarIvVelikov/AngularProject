// import { inject } from '@angular/core';
// import {
//   ActivatedRouteSnapshot,
//   CanActivateChildFn,
//   CanActivateFn,
//   Router,
//   RouterStateSnapshot,
//   UrlTree,
// } from '@angular/router';
// import { Observable, catchError, map } from 'rxjs';
// import { UserService } from 'src/app/user/user.service';

// export const canActivate: CanActivateFn = (
//   route: ActivatedRouteSnapshot,
//   state: RouterStateSnapshot
// ) => {
//   const authService = inject(UserService);
//   const router = inject(Router);

//   return authService.checkLogin().pipe(
//     map(() => true),
//     catchError(() => {
//       return router.navigate(['home']);
//     })
//   );
// };

// export const canActivateChild: CanActivateChildFn = (
//   route: ActivatedRouteSnapshot,
//   state: RouterStateSnapshot
// ) => canActivate(route, state);
