import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-card',
  imports: [
    MatCardModule,
    FontAwesomeModule,
    CommonModule
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
@Input() nomeHabilidade!: String;
@Input() iconHabilidade!: IconDefinition | null;
@Input() urlIconHabilidade!: string | null;
}
