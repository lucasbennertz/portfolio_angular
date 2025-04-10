import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Component } from '@angular/core';
@Component({
  selector: 'app-hard-skills',
  imports: [
    FontAwesomeModule
  ],
  templateUrl: './hard-skills.component.html',
  styleUrl: './hard-skills.component.css'
})
export class HardSkillsComponent {
  faLinkedin = faLinkedin;
}
