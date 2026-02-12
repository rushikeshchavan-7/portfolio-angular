import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../services/config';

@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-details.html',
  styleUrl: './project-details.scss',
})
export class ProjectDetailsComponent {
  @Input() project: Project | null = null;
  @Output() closeModal = new EventEmitter<void>();

  onOverlayClick(): void {
    this.closeModal.emit();
  }

  onCardClick(event: Event): void {
    event.stopPropagation();
  }

  close(): void {
    this.closeModal.emit();
  }
}
