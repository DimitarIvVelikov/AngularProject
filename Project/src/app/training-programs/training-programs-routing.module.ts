import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { CatalogComponent } from './catalog/catalog.component';
import { EditComponent } from './edit/edit.component';
import { CurrentTrainingProgramComponent } from './current-training-program/current-training-program.component';
import { TrainingOwnerGuard } from '../guards/trainingProgram.guard';
import { AuthActivate } from '../guards/auth.guard';

const routes: Routes = [
  { path: 'create', component: CreateComponent, canActivate: [AuthActivate] },
  { path: 'catalog', component: CatalogComponent },
  { path: 'catalog/:trainingId', component: CurrentTrainingProgramComponent },
  {
    path: 'catalog/:trainingId/edit',
    component: EditComponent,
    canActivate: [TrainingOwnerGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrainingProgramsRoutingModule {}
