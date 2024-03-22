import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environments';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  domains: string[] = environment.domains;

  constructor(private router: Router, private userService: UserService) {}

  login(form: NgForm) {
    if (form.invalid) {
      return;
    }
    const { email, password } = form.value;
    this.userService.login(email, password);
    this.router.navigate(['/']);
  }
}
