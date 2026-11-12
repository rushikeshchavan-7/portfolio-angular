import { AfterViewInit, Component, ElementRef, OnDestroy, input, output, viewChild } from '@angular/core';
import { Project } from '../services/config';
import { IconComponent } from '../shared/icon';

@Component({
  selector: 'app-project-details',
  imports: [IconComponent],
  templateUrl: './project-details.html',
  styleUrl: './project-details.scss',
  host: { '(document:keydown.escape)': 'closed.emit()' },
})
export class ProjectDetailsComponent implements AfterViewInit, OnDestroy {
  readonly project = input.required<Project>();
  readonly closed = output<void>();

  private closeBtn = viewChild<ElementRef<HTMLButtonElement>>('closeBtn');
  private previousFocus: HTMLElement | null = null;

  ngAfterViewInit(): void {
    this.previousFocus = document.activeElement as HTMLElement | null;
    document.body.style.overflow = 'hidden';
    this.closeBtn()?.nativeElement.focus();
  }

  ngOnDestroy(): void {
    document.body.style.overflow = '';
    this.previousFocus?.focus?.();
  }
}
