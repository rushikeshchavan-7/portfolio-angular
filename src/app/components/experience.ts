import { AfterViewInit, Component, ElementRef, OnDestroy, signal, viewChild } from '@angular/core';
import { siteConfig } from '../services/config';
import { IconComponent } from '../shared/icon';
import { RevealDirective } from '../shared/reveal.directive';

@Component({
  selector: 'app-experience',
  imports: [IconComponent, RevealDirective],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
  host: { '(window:scroll)': 'measure()', '(window:resize)': 'measure()' },
})
export class ExperienceComponent implements AfterViewInit, OnDestroy {
  readonly items = siteConfig.experiences;
  readonly fill = signal(0);
  private rail = viewChild<ElementRef<HTMLElement>>('rail');
  private raf = 0;

  readonly typeLabel = { work: 'Role', research: 'Research', leadership: 'Leadership' } as const;

  ngAfterViewInit(): void {
    this.measure();
  }

  ngOnDestroy(): void {
    cancelAnimationFrame(this.raf);
  }

  measure(): void {
    cancelAnimationFrame(this.raf);
    this.raf = requestAnimationFrame(() => {
      const el = this.rail()?.nativeElement;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const probe = window.innerHeight * 0.6;
      const p = (probe - r.top) / Math.max(1, r.height);
      this.fill.set(Math.max(0, Math.min(1, p)));
    });
  }

  logoError(e: Event): void {
    (e.target as HTMLImageElement).style.visibility = 'hidden';
  }
}
