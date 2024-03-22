import { Injectable } from '@angular/core';
import { UserForAuth } from '../types/user';
import { BehaviorSubject, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  // private user$$ = new BehaviorSubject<UserForAuth | undefined>(undefined);
  // private user$ = this.user$$.asObservable();
  // userSubscription: Subscription;

  user: UserForAuth | undefined;

  get isLoggedIn(): boolean {
    return !!this.user;
  }

  constructor() {
    try {
      const IsUser = localStorage?.getItem('auth') || '';
      this.user = JSON.parse(IsUser);
    } catch (error) {
      this.user = undefined;
    }
  }

  login(email: string, password: string): void {
    return localStorage.setItem(
      'auth',
      JSON.stringify({ email, password, username: 'Peter' })
    );
  }

  register(email: string, password: string): void {
    return localStorage.setItem(
      'auth',
      JSON.stringify({ email, password, username: 'Peter' })
    );
  }

  logout(): void {
    return localStorage.removeItem('auth');
  }
}
