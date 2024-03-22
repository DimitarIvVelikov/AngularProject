import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private userService: UserService, private router: Router) {}

  get isLogged(): boolean {
    return this.userService.isLoggedIn;
  }

  get username(): string {
    return this.userService?.user?.username || '';
  }

  ngOnInit(): void {
    console.log('Mount');

    this.isLogged;
  }
  logout() {
    this.userService.logout();
    this.router.navigate(['/home']);
  }
}
