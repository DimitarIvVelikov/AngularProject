import { Injectable } from '@angular/core';
import { UserForAuth } from '../types/user';
import { BehaviorSubject, Subscription, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private user$$ = new BehaviorSubject<UserForAuth | undefined>(undefined);
  private user$ = this.user$$.asObservable();
  userSubscription: Subscription;

  user: UserForAuth | undefined;

  get isLoggedIn(): boolean {
    return !!this.user;
  }

  constructor(private http: HttpClient) {
    this.userSubscription = this.user$.subscribe((user) => {
      this.user = user;
    });
  }

  login(email: string, password: string) {
    return this.http
      .post<UserForAuth>('/api/auth/login', { email, password })
      .pipe(
        tap((user) => {
          this.user$$.next(user);
        })
      );
  }

  register(email: string, password: string) {
    return this.http
      .post<UserForAuth>('/api/auth/register', { email, password })
      .pipe(
        tap((user) => {
          this.user$$.next(user);
        })
      );
  }

  logout() {
    return this.http.post<UserForAuth>('/api/auth/logout', {}).pipe(
      tap((user) => {
        this.user$$.next(undefined);
      })
    );
  }

  getProfile() {
    return this.http.get<UserForAuth>('/api/auth/profile', {}).pipe(
      tap((user) => {
        this.user$$.next(user);
      })
    );
  }
}
