import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailDirective } from './validators/email.directive';
import { CardsContainerComponent } from './cards-container/cards-container.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [EmailDirective, CardsContainerComponent],
  imports: [CommonModule, RouterModule],
  exports: [EmailDirective, CardsContainerComponent],
})
export class SharedModule {}
