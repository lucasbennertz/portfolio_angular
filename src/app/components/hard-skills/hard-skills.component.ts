import { faJava, faHtml5, faCss3, faDocker, faJs, faLinux, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Component } from '@angular/core';
import { CardComponent } from './card/card.component';
import { HardSkillModel } from './hard-skill.model';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-hard-skills',
  imports: [
    FontAwesomeModule,
    CardComponent,
    CommonModule
  ],
  templateUrl: './hard-skills.component.html',
  styleUrl: './hard-skills.component.css'
})
export class HardSkillsComponent {
  hardSkills: HardSkillModel[] = [
    {
      nome: "Java", iconName: faJava,
      iconUrl: null
    },
    {
      nome: "HTML5", iconName: faHtml5,
      iconUrl: null
    },
    {
      nome: "CSS3", iconName: faCss3,
      iconUrl: null
    },
    {
      nome: "Docker", iconName: faDocker,
      iconUrl: null
    },
    {
      nome: "Javascript", iconName: faJs,
      iconUrl: null
    },
    {
      nome: "Linux", iconName: faLinux,
      iconUrl: null
    },
    {
      nome: "Git", iconName: faGithub,
      iconUrl: null
    },
    {
      nome: 'Flutter',
      iconName: null,
      iconUrl: "/imagens/logos/Logo-flutter.png"
    }
  ]
}
