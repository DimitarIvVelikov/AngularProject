import { Component, OnInit } from '@angular/core';
import { TrainingProgramsService } from '../training-programs.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TrainingPrograms } from 'src/app/types/trainingPrograms';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-current-training-program',
  templateUrl: './current-training-program.component.html',
  styleUrls: ['./current-training-program.component.css'],
})
export class CurrentTrainingProgramComponent implements OnInit {
  trainingProgram: TrainingPrograms = {
    _id: '',
    name: '',
    description: '',
    difficulty: '',
    duration: 0,
    created_at: '',
    updatedAt: '',
    owner: '',
    signUpList: [],
    imageUrl: '',
  };

  constructor(
    private trainingProgramService: TrainingProgramsService,
    private activeRoute: ActivatedRoute,
    private router: Router,
    public userService: UserService
  ) {}
  ngOnInit(): void {
    this.activeRoute.params.subscribe((params) => {
      this.trainingProgramService
        .getTrainingProgram(params['trainingId'])
        .subscribe((trainingProgram) => {
          this.trainingProgram = trainingProgram;
        });
    });
  }

  deleteTrainingProgram(): void {
    this.trainingProgramService
      .deleteTrainingProgram(this.trainingProgram._id)
      .subscribe(() => {
        this.router.navigate(['/catalog']);
      });
  }

  signUp(): void {
    const programId = this.trainingProgram._id as string;
    this.trainingProgramService.signUp(programId).subscribe(() => {
      location.reload();
    });
  }
}
