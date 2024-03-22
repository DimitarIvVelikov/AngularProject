import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environments';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  domains: string[] = environment.domains;

  constructor(private router: Router, private userService: UserService) {}

  register(form: NgForm) {
    if (form.invalid) {
      return;
    }

    const { email, password } = form.value;
    this.userService.register(email, password);
    this.router.navigate(['/']);
  }
}
