import { Component, OnInit } from '@angular/core';
import { TrainingProgramsService } from '../training-programs.service';
import { ActivatedRoute } from '@angular/router';
import { TrainingPrograms } from 'src/app/types/trainingPrograms';

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
  };

  constructor(
    private trainingProgramService: TrainingProgramsService,
    private activeRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.activeRoute.params.subscribe((params) => {
      this.trainingProgramService
        .getTrainingProgram(params['trainingId'])
        .subscribe((trainingProgram) => {
          this.trainingProgram = trainingProgram;
          console.log(this.trainingProgram);
        });
    });
  }
}
