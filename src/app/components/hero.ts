import { AfterViewInit, Component, ElementRef, OnDestroy, signal, viewChild } from '@angular/core';
import { siteConfig } from '../services/config';
import { IconComponent } from '../shared/icon';
import { RevealDirective } from '../shared/reveal.directive';
import { scrollToSection } from '../shared/nav';

@Component({
  selector: 'app-hero',
  imports: [IconComponent, RevealDirective],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class HeroComponent implements AfterViewInit, OnDestroy {
  readonly hero = siteConfig.hero;
  readonly resume = this.hero.buttons.find((b) => b.kind === 'primary');
  readonly socials = this.hero.buttons.filter((b) => b.kind !== 'primary');

  private statsRef = viewChild<ElementRef<HTMLElement>>('stats');
  private io?: IntersectionObserver;
  readonly statValues = signal<number[]>(this.hero.stats.map(() => 0));

  ngAfterViewInit(): void {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const el = this.statsRef()?.nativeElement;
    if (reduced || !el) {
      this.statValues.set(this.hero.stats.map((s) => s.value));
      return;
    }
    this.io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          this.countUp();
          this.io?.disconnect();
        }
      },
      { threshold: 0.5 },
    );
    this.io.observe(el);
  }

  ngOnDestroy(): void {
    this.io?.disconnect();
  }

  go(id: string, e?: Event): void {
    e?.preventDefault();
    scrollToSection(id);
  }

  formatStat(i: number): string {
    const s = this.hero.stats[i];
    return this.statValues()[i].toFixed(s.decimals ?? 0) + (s.suffix ?? '');
  }

  private countUp(): void {
    const targets = this.hero.stats.map((s) => s.value);
    const start = performance.now();
    const dur = 1800;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / dur);
      const e = 1 - Math.pow(1 - t, 4);
      this.statValues.set(targets.map((v) => Math.round(v * e)));
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }
}
