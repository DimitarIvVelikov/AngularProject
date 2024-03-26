import { Component, Input } from '@angular/core';
import { TrainingPrograms } from 'src/app/types/trainingPrograms';

@Component({
  selector: 'app-cards-container',
  templateUrl: './cards-container.component.html',
  styleUrls: ['./cards-container.component.css'],
})
export class CardsContainerComponent {
  @Input() trainingPrograms: TrainingPrograms[] = [];
}
