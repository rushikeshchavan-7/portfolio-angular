import { Component, inject, signal } from '@angular/core';
import { ThemeService } from './services/theme';
import { Project } from './services/config';
import { NavbarComponent } from './components/navbar';
import { HeroComponent } from './components/hero';
import { CapabilitiesComponent } from './components/capabilities';
import { ExperienceComponent } from './components/experience';
import { ProjectsComponent } from './components/projects';
import { EducationComponent } from './components/education';
import { CertificatesComponent } from './components/certificates';
import { ContactComponent } from './components/contact';
import { FooterComponent } from './components/footer';
import { ProjectDetailsComponent } from './components/project-details';
import { CommandPaletteComponent } from './components/command-palette';

@Component({
  selector: 'app-root',
  imports: [
    NavbarComponent,
    HeroComponent,
    CapabilitiesComponent,
    ExperienceComponent,
    ProjectsComponent,
    EducationComponent,
    CertificatesComponent,
    ContactComponent,
    FooterComponent,
    ProjectDetailsComponent,
    CommandPaletteComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  // Injected so the theme effect runs at startup.
  private readonly theme = inject(ThemeService);

  readonly selectedProject = signal<Project | null>(null);
  readonly paletteOpen = signal(false);

  openProject(project: Project): void {
    this.selectedProject.set(project);
  }
}
