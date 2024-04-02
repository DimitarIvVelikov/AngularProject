import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './catalog/catalog.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { TrainingProgramsRoutingModule } from './training-programs-routing.module';
import { CurrentTrainingProgramComponent } from './current-training-program/current-training-program.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CatalogComponent,
    CreateComponent,
    EditComponent,
    CurrentTrainingProgramComponent,
  ],
  imports: [
    CommonModule,
    TrainingProgramsRoutingModule,
    SharedModule,
    FormsModule,
  ],
})
export class TrainingProgramsModule {}
