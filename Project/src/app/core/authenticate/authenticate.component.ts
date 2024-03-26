import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.css'],
})
export class AuthenticateComponent implements OnInit {
  isAuthenticating = true;
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getProfile().subscribe(() => {
      this.isAuthenticating = false;
    });
  }
}
