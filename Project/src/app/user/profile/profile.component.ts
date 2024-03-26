import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { UserForAuth } from 'src/app/types/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  profile: UserForAuth | undefined;
  constructor(private userService: UserService) {}
  ngOnInit(): void {
    this.userService.getProfile().subscribe((profile) => {
      console.log(profile);
      this.profile = profile;
    });
  }
}
