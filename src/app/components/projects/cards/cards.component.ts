import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  imports: [],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {
 @Input() nomeProjeto: string = ""
 @Input() imagemProjeto: string = ""
 @Input() descProjeto: string = ""
}
