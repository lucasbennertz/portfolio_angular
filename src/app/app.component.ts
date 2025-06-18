import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './template/header/header.component';
import { FooterComponent } from './template/footer/footer.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { HardSkillsComponent } from './components/hard-skills/hard-skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    FooterComponent,
    AboutMeComponent,
    HardSkillsComponent,
    ProjectsComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
}
