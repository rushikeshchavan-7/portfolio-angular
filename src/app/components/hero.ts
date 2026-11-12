import { AfterViewInit, Component, ElementRef, OnDestroy, signal, viewChild } from '@angular/core';
import { siteConfig } from '../services/config';
import { IconComponent } from '../shared/icon';
import { NeuralFieldComponent } from '../shared/neural-field';
import { scrollToSection } from '../shared/nav';

interface ConsoleLine {
  key: string;
  value: string;
}

@Component({
  selector: 'app-hero',
  imports: [IconComponent, NeuralFieldComponent],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class HeroComponent implements AfterViewInit, OnDestroy {
  readonly hero = siteConfig.hero;
  readonly marquee = siteConfig.marquee;

  private statsRef = viewChild<ElementRef<HTMLElement>>('stats');
  private reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  private timers: ReturnType<typeof setTimeout>[] = [];
  private io?: IntersectionObserver;

  // Rotating "I build ___" text with a typewriter effect
  readonly typed = signal('');
  private roleIdx = 0;

  // Agent console
  readonly consoleLines: ConsoleLine[] = [
    { key: 'model', value: 'RAG · LangGraph agents · Groq / Gemini' },
    { key: 'api', value: '.NET Core · FastAPI · REST' },
    { key: 'ui', value: 'Angular · React · Next.js' },
    { key: 'data', value: 'PostgreSQL · Oracle · ETL · ML' },
    { key: 'ship', value: 'Docker · AWS · CI · e2e tests' },
  ];
  readonly shownLines = signal(0);
  readonly consoleDone = signal(false);

  // Count-up stats
  readonly statValues = signal<number[]>(this.hero.stats.map(() => 0));

  ngAfterViewInit(): void {
    if (this.reduced) {
      this.typed.set(this.hero.rotatingRoles[0]);
      this.shownLines.set(this.consoleLines.length);
      this.consoleDone.set(true);
      this.statValues.set(this.hero.stats.map((s) => s.value));
      return;
    }
    this.typeLoop();
    this.after(700, () => this.runConsole());

    const el = this.statsRef()?.nativeElement;
    if (el) {
      this.io = new IntersectionObserver(([e]) => {
        if (e.isIntersecting) {
          this.countUp();
          this.io?.disconnect();
        }
      }, { threshold: 0.4 });
      this.io.observe(el);
    }
  }

  ngOnDestroy(): void {
    this.timers.forEach(clearTimeout);
    this.io?.disconnect();
  }

  go(id: string): void {
    scrollToSection(id);
  }

  formatStat(i: number): string {
    const s = this.hero.stats[i];
    return this.statValues()[i].toFixed(s.decimals ?? 0) + (s.suffix ?? '');
  }

  private after(ms: number, fn: () => void): void {
    this.timers.push(setTimeout(fn, ms));
  }

  private typeLoop(): void {
    const word = this.hero.rotatingRoles[this.roleIdx];
    let i = 0;
    const type = () => {
      this.typed.set(word.slice(0, ++i));
      if (i < word.length) this.after(45 + Math.random() * 40, type);
      else this.after(1700, erase);
    };
    const erase = () => {
      this.typed.set(word.slice(0, --i));
      if (i > 0) this.after(22, erase);
      else {
        this.roleIdx = (this.roleIdx + 1) % this.hero.rotatingRoles.length;
        this.after(280, () => this.typeLoop());
      }
    };
    type();
  }

  private runConsole(): void {
    this.shownLines.set(0);
    this.consoleDone.set(false);
    const next = () => {
      if (this.shownLines() < this.consoleLines.length) {
        this.shownLines.update((n) => n + 1);
        this.after(520, next);
      } else {
        this.consoleDone.set(true);
        this.after(5200, () => this.runConsole());
      }
    };
    this.after(400, next);
  }

  private countUp(): void {
    const targets = this.hero.stats.map((s) => s.value);
    const start = performance.now();
    const dur = 1600;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / dur);
      const e = 1 - Math.pow(1 - t, 4);
      this.statValues.set(targets.map((v) => v * e));
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }
}
