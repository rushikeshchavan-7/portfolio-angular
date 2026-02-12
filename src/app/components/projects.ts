import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { siteConfig, Project } from '../services/config';
import { ProjectCardComponent } from './project-card';

type FilterToggle = 'all' | 'web' | 'mobile' | 'ml';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ProjectCardComponent],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class ProjectsComponent {
  @Output() cardClick = new EventEmitter<Project>();

  activeFilter: FilterToggle = 'all';
  projects = siteConfig.projects;

  readonly filters: { key: FilterToggle; label: string }[] = [
    { key: 'all', label: 'All' },
    { key: 'web', label: 'Web' },
    { key: 'mobile', label: 'Mobile' },
    { key: 'ml', label: 'ML' },
  ];

  get filteredProjects(): Project[] {
    if (this.activeFilter === 'all') return this.projects;
    return this.projects.filter((p) => this.matchesFilter(p, this.activeFilter));
  }

  private matchesFilter(project: Project, filter: FilterToggle): boolean {
    const cat = project.category.toLowerCase();
    switch (filter) {
      case 'web':
        return cat.includes('web');
      case 'mobile':
        return cat.includes('android') || cat.includes('mobile');
      case 'ml':
        return cat.includes('machine') || cat.includes('ml');
      default:
        return true;
    }
  }

  setFilter(key: FilterToggle): void {
    this.activeFilter = key;
  }

  onCardClick(project: Project): void {
    this.cardClick.emit(project);
  }
}
