import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../user.service';
import { UserForAuth } from 'src/app/types/user';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { environment } from 'src/environments/environments';
import { emailValidator } from 'src/app/shared/utils/email-validator';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  profile: UserForAuth = {
    _id: '',
    username: '',
    email: '',
    created_at: '',
    updatedAt: '',
  };
  editView: boolean = false;
  domains: string[] = environment.domains;

  form = this.fb.group({
    username: [this.profile?.username, [Validators.required]],
    email: [
      this.profile?.email,
      [Validators.required, emailValidator(this.domains)],
    ],
  });
  constructor(private userService: UserService, private fb: FormBuilder) {}
  ngOnInit(): void {
    this.userService.getProfile().subscribe((profile) => {
      this.profile = profile;
      this.form.setValue({
        username: this.profile?.username,
        email: this.profile?.email,
      });
    });
  }

  toggleEdit() {
    this.editView = !this.editView;
  }

  editProfile() {
    if (this.form.invalid) return;
    const { username, email } = this.form.value;
    this.profile = {
      ...this.profile,
      username: username,
      email: email,
    } as UserForAuth;

    this.userService.updateProfile(this.profile).subscribe((profile) => {
      location.reload();
    });
  }
}
