import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environments';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  domains: string[] = environment.domains;

  constructor(private router: Router) {}

  login(form: NgForm) {
    if (form.invalid) {
      return;
    }
  }
}
