import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailDirective } from './validators/email.directive';
import { CardsContainerComponent } from './cards-container/cards-container.component';
import { RouterModule } from '@angular/router';
import { ImageUrlDirective } from './validators/image-url.directive';
import { ShortenTextPipe } from './pipes/shorten-text.pipe';

@NgModule({
  declarations: [EmailDirective, CardsContainerComponent, ImageUrlDirective, ShortenTextPipe],
  imports: [CommonModule, RouterModule],
  exports: [EmailDirective, CardsContainerComponent, ImageUrlDirective],
})
export class SharedModule {}
