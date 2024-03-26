import { Component, OnInit } from '@angular/core';
import { TrainingProgramsService } from '../training-programs/training-programs.service';
import { TrainingPrograms } from '../types/trainingPrograms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  trainingPrograms: TrainingPrograms[] = [];

  constructor(private trainingProgramService: TrainingProgramsService) {}
  ngOnInit(): void {
    this.trainingProgramService
      .getAllTrainingPrograms()
      .subscribe((trainingPrograms) => {
        this.trainingPrograms = trainingPrograms;
        console.log(this.trainingPrograms);
      });
  }
}
