import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  imports: [NgIf],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {
 @Input() nomeProjeto: string = ""
 @Input() imagemProjeto: string = ""
 @Input() descProjeto: string = ""
 @Input() linkProjeto: string = ""
}
