import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TrainingProgramsService } from '../training-programs.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TrainingPrograms } from 'src/app/types/trainingPrograms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  trainingProgram: TrainingPrograms = {
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
  };
  constructor(
    private trainingProgramsService: TrainingProgramsService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const programId = this.activeRoute.params.subscribe((params) => {
      const programId = params['trainingId'];
      this.trainingProgramsService
        .getTrainingProgram(programId)
        .subscribe((program) => {
          this.trainingProgram = program;
        });
    });
  }
  edit(form: NgForm) {
    if (form.invalid) return;

    const { name, description, duration, difficulty } = form.value;

    this.trainingProgramsService
      .editTrainingProgram(this.trainingProgram._id, {
        name,
        description,
        difficulty,
        duration,
      })
      .subscribe((program) => {
        this.router.navigate(['/catalog/' + this.trainingProgram._id]);
      });
  }

  cancel(): void {
    this.router.navigate(['/catalog/' + this.trainingProgram._id]);
  }
}
