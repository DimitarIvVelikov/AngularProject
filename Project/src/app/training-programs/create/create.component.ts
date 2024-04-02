import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TrainingProgramsService } from '../training-programs.service';
import { UserService } from 'src/app/user/user.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environments';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent {
  imageUrlExpression: string = environment.imageUrlValidator;
  constructor(
    private trainingProgramService: TrainingProgramsService,
    private router: Router
  ) {}
  create(form: NgForm) {
    if (form.invalid) return;

    const { name, description, duration, difficulty, imageUrl } = form.value;

    this.trainingProgramService
      .createTrainingProgram(name, description, duration, difficulty, imageUrl)
      .subscribe(() => {
        this.router.navigate(['/catalog']);
      });
  }
}
