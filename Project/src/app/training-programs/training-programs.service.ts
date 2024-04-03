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

  createTrainingProgram(
    name: string,
    description: string,
    duration: string,
    difficulty: string,
    imageUrl: string
  ) {
    return this.http.post<TrainingPrograms>('/api/training-programs', {
      name,
      description,
      difficulty,
      duration,
      imageUrl,
    });
  }

  editTrainingProgram(
    programId: string,
    trainingProgram: {
      name: string;
      difficulty: string;
      description: string;
      duration: string;
    }
  ) {
    return this.http.put<TrainingPrograms>(
      '/api/training-programs/' + programId,
      { ...trainingProgram }
    );
  }

  deleteTrainingProgram(programId: string) {
    return this.http.delete('/api/training-programs/' + programId);
  }

  signUp(programId: string) {
    return this.http.post<TrainingPrograms>(
      '/api/training-programs/signUp/' + programId,
      {}
    );
  }

  getLatestTrainingPrograms() {
    return this.http.get<TrainingPrograms[]>('/api/training-programs/latest');
  }
}
