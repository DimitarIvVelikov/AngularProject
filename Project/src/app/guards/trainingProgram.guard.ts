import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { TrainingProgramsService } from '../training-programs/training-programs.service';
import { UserService } from '../user/user.service';
import { TrainingPrograms } from '../types/trainingPrograms';

@Injectable({
  providedIn: 'root',
})
export class TrainingOwnerGuard implements CanActivate {
  constructor(
    private userService: UserService,
    private trainingProgramService: TrainingProgramsService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean {
    const trainingId = route.paramMap.get('trainingId') as string;

    return this.trainingProgramService.getTrainingProgram(trainingId).pipe(
      tap((trainingProgram: TrainingPrograms) => {
        if (!this.userService.user) {
          this.router.navigate(['/login']);
          return false;
        }
        const isOwner = this.userService.user?._id === trainingProgram.owner;
        if (!isOwner) {
          this.router.navigate(['/catalog/', trainingProgram._id]);
          return false;
        }
        return true;
      }),
      map(() => true)
    );
  }
}
