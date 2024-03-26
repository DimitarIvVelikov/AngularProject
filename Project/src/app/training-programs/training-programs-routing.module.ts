import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { CatalogComponent } from './catalog/catalog.component';
import { EditComponent } from './edit/edit.component';
import { CurrentTrainingProgramComponent } from './current-training-program/current-training-program.component';

const routes: Routes = [
  { path: 'create', component: CreateComponent },
  { path: 'edit', component: EditComponent },
  { path: 'catalog', component: CatalogComponent },
  { path: 'catalog/:trainingId', component: CurrentTrainingProgramComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrainingProgramsRoutingModule {}
