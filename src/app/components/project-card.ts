import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../services/config';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss',
})
export class ProjectCardComponent {
  @Input({ required: true }) project!: Project;
  @Output() cardClick = new EventEmitter<Project>();

  readonly maxVisibleTags = 4;

  get overflowCount(): number {
    if (!this.project.tags?.length) return 0;
    return Math.max(0, this.project.tags.length - this.maxVisibleTags);
  }

  get visibleTags(): string[] {
    if (!this.project.tags) return [];
    return this.project.tags.slice(0, this.maxVisibleTags);
  }

  onClick(): void {
    this.cardClick.emit(this.project);
  }
}
