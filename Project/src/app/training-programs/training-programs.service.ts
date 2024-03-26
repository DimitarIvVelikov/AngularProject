import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TrainingPrograms } from '../types/trainingPrograms';

@Injectable({
  providedIn: 'root',
})
export class TrainingProgramsService {
  constructor(private http: HttpClient) {}

  getAllTrainingPrograms() {
    return this.http.get<TrainingPrograms[]>('/api/training-programs');
  }

  getTrainingProgram(programId: string) {
    return this.http.get<TrainingPrograms>(
      '/api/training-programs/' + programId
    );
  }
}
