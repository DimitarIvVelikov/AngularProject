import { Component, OnInit } from '@angular/core';
import { TrainingProgramsService } from '../training-programs/training-programs.service';
import { TrainingPrograms } from '../types/trainingPrograms';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  trainingPrograms = [
    {
      _id: '',
      name: '',
      description: '',
      duration: 0,
      difficulty: '',
      created_at: '',
      updatedAt: '',
      owner: '',
      signUpList: [],
      imageUrl: '',
    },
  ] as TrainingPrograms[];

  constructor(private trainingProgramService: TrainingProgramsService) {}
  ngOnInit(): void {
    this.trainingProgramService
      .getLatestTrainingPrograms()
      .subscribe((trainingPrograms) => {
        this.trainingPrograms = trainingPrograms;
      });
  }
}
