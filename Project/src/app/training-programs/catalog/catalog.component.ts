import { Component, OnInit } from '@angular/core';
import { TrainingPrograms } from 'src/app/types/trainingPrograms';
import { TrainingProgramsService } from '../training-programs.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
})
export class CatalogComponent implements OnInit {
  trainingPrograms: TrainingPrograms[] = [];

  constructor(private trainingProgramService: TrainingProgramsService) {}
  ngOnInit(): void {
    this.trainingProgramService
      .getAllTrainingPrograms()
      .subscribe((trainingPrograms) => {
        this.trainingPrograms = trainingPrograms;
      });
  }
}
