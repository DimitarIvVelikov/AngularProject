import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './catalog/catalog.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { TrainingProgramsRoutingModule } from './training-programs-routing.module';

@NgModule({
  declarations: [CatalogComponent, CreateComponent, EditComponent],
  imports: [CommonModule, TrainingProgramsRoutingModule],
})
export class TrainingProgramsModule {}
