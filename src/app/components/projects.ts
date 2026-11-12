import { AfterViewInit, Component, ElementRef, OnDestroy, computed, output, signal, viewChild } from '@angular/core';
import { siteConfig, Project, ProjectKind } from '../services/config';
import { RevealDirective } from '../shared/reveal.directive';

type Filter = 'all' | ProjectKind;

@Component({
  selector: 'app-projects',
  imports: [RevealDirective],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class ProjectsComponent implements AfterViewInit, OnDestroy {
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

  // Walkthrough video: plays only while on screen, never under reduced motion
  private tour = viewChild<ElementRef<HTMLVideoElement>>('tour');
  private railRef = viewChild<ElementRef<HTMLElement>>('rail');
  readonly playing = signal(false);
  readonly slide = signal(0);
  private userPaused = false;
  private io?: IntersectionObserver;
  private reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  ngAfterViewInit(): void {
    const v = this.tour()?.nativeElement;
    if (!v) return;
    v.muted = true;
    v.addEventListener('play', () => this.playing.set(true));
    v.addEventListener('pause', () => this.playing.set(false));
    if (this.reduced) return;
    this.io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !this.userPaused) v.play().catch(() => {});
        else if (!e.isIntersecting) v.pause();
      },
      { threshold: 0.35 },
    );
    this.io.observe(v);
  }

  ngOnDestroy(): void {
    this.io?.disconnect();
  }

  togglePlay(): void {
    const v = this.tour()?.nativeElement;
    if (!v) return;
    if (v.paused) {
      this.userPaused = false;
      v.play().catch(() => {});
    } else {
      this.userPaused = true;
      v.pause();
    }
  }

  scrollGallery(dir: 1 | -1): void {
    const r = this.railRef()?.nativeElement;
    const first = r?.querySelector<HTMLElement>('.slide');
    if (!r || !first) return;
    r.scrollBy({ left: dir * (first.offsetWidth + 20), behavior: 'smooth' });
  }

  onRailScroll(): void {
    const r = this.railRef()?.nativeElement;
    const first = r?.querySelector<HTMLElement>('.slide');
    if (!r || !first) return;
    this.slide.set(Math.round(r.scrollLeft / (first.offsetWidth + 20)));
  }

  imgError(e: Event): void {
    (e.target as HTMLImageElement).style.opacity = '0';
  }
}
