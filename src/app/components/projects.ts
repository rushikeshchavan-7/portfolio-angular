import { Component, computed, output, signal } from '@angular/core';
import { siteConfig, Project, ProjectKind } from '../services/config';
import { IconComponent } from '../shared/icon';
import { RevealDirective } from '../shared/reveal.directive';
import { SpotlightDirective } from '../shared/spotlight.directive';

type Filter = 'all' | ProjectKind;

@Component({
  selector: 'app-projects',
  imports: [IconComponent, RevealDirective, SpotlightDirective],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class ProjectsComponent {
  readonly open = output<Project>();

  readonly featured = siteConfig.projects.find((p) => p.featured) ?? null;
  private readonly rest = siteConfig.projects.filter((p) => !p.featured);

  readonly filters: { key: Filter; label: string }[] = [
    { key: 'all', label: 'All' },
    { key: 'ai', label: 'AI' },
    { key: 'fullstack', label: 'Full-stack' },
    { key: 'tools', label: 'Tools' },
  ];

  readonly filter = signal<Filter>('all');
  readonly list = computed(() => {
    const f = this.filter();
    return f === 'all' ? this.rest : this.rest.filter((p) => p.kinds.includes(f));
  });

  count(key: Filter): number {
    return key === 'all' ? this.rest.length : this.rest.filter((p) => p.kinds.includes(key)).length;
  }

  imgError(e: Event): void {
    (e.target as HTMLImageElement).style.opacity = '0';
  }
}
