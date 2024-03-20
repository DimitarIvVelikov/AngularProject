import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgramsRoutingModule } from './programs-routing.module';
import { CatalogComponent } from './catalog/catalog.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [CatalogComponent, CreateComponent, EditComponent],
  imports: [CommonModule, ProgramsRoutingModule],
})
export class ProgramsModule {}
