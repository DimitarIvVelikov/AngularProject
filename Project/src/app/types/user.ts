import { TrainingPrograms } from './trainingPrograms';

export interface UserForAuth {
  _id: string;
  username: string;
  email: string;
  created_at: string;
  updatedAt: string;
  signUpList: TrainingPrograms[];
  createdList: TrainingPrograms[];
}
