import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from './services/theme';
import { siteConfig } from './services/config';
import { NavbarComponent } from './components/navbar';
import { HeroComponent } from './components/hero';
import { SkillsComponent } from './components/skills';
import { ExperienceComponent } from './components/experience';
import { ProjectsComponent } from './components/projects';
import { EducationComponent } from './components/education';
import { CertificatesComponent } from './components/certificates';
import { ContactComponent } from './components/contact';
import { FooterComponent } from './components/footer';
import { SideElementsComponent } from './components/side-elements';
import { ProjectDetailsComponent } from './components/project-details';
import { Project } from './services/config';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    HeroComponent,
    SkillsComponent,
    ExperienceComponent,
    ProjectsComponent,
    EducationComponent,
    CertificatesComponent,
    ContactComponent,
    FooterComponent,
    SideElementsComponent,
    ProjectDetailsComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  config = siteConfig;
  projectModalOpen = false;
  selectedProject: Project | null = null;

  constructor(private themeService: ThemeService) {
    // Theme service initializes itself and applies CSS variables
  }

  openProjectModal(project: Project): void {
    this.selectedProject = project;
    this.projectModalOpen = true;
  }

  closeProjectModal(): void {
    this.projectModalOpen = false;
    this.selectedProject = null;
  }
}
