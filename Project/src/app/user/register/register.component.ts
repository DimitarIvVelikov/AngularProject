import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { environment } from 'src/environments/environments';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  domains: string[] = environment.domains;

  constructor() {}

  register(form: NgForm) {
    if (form.invalid) {
      return;
    }
  }
}
