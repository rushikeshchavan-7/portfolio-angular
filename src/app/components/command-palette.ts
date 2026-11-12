import { Component, ElementRef, computed, effect, inject, input, output, signal, viewChild } from '@angular/core';
import { siteConfig, Project } from '../services/config';
import { ThemeService } from '../services/theme';
import { IconComponent, IconName } from '../shared/icon';
import { NAV_SECTIONS, scrollToSection } from '../shared/nav';

interface Command {
  id: string;
  group: 'Navigate' | 'Projects' | 'Links' | 'Actions';
  label: string;
  hint?: string;
  icon: IconName;
  keywords: string;
  run: () => void;
}

@Component({
  selector: 'app-command-palette',
  imports: [IconComponent],
  templateUrl: './command-palette.html',
  styleUrl: './command-palette.scss',
  host: { '(document:keydown)': 'onGlobalKey($event)' },
})
export class CommandPaletteComponent {
  readonly open = input(false);
  readonly openChange = output<boolean>();
  readonly openProject = output<Project>();

  private theme = inject(ThemeService);
  private inputRef = viewChild<ElementRef<HTMLInputElement>>('q');
  private listRef = viewChild<ElementRef<HTMLElement>>('list');

  readonly query = signal('');
  readonly cursor = signal(0);

  private readonly commands: Command[] = [
    ...NAV_SECTIONS.map<Command>((s) => ({
      id: 'nav-' + s.id,
      group: 'Navigate',
      label: s.label,
      hint: 'Section',
      icon: 'arrow-right',
      keywords: s.id,
      run: () => scrollToSection(s.id),
    })),
    ...siteConfig.projects.map<Command>((p) => ({
      id: 'proj-' + p.id,
      group: 'Projects',
      label: p.title,
      hint: p.tagline,
      icon: p.kinds.includes('ai') ? 'sparkle' : 'layout',
      keywords: p.tags.join(' ') + ' ' + p.kinds.join(' '),
      run: () => this.openProject.emit(p),
    })),
    ...siteConfig.hero.buttons.map<Command>((b) => ({
      id: 'link-' + b.label,
      group: 'Links',
      label: b.label,
      hint: new URL(b.url).hostname.replace('www.', ''),
      icon: b.icon ?? 'external',
      keywords: 'open link social cv',
      run: () => window.open(b.url, '_blank', 'noopener'),
    })),
    {
      id: 'act-email',
      group: 'Actions',
      label: 'Copy email address',
      hint: siteConfig.contact.email,
      icon: 'copy',
      keywords: 'contact mail hire',
      run: () => navigator.clipboard?.writeText(siteConfig.contact.email),
    },
    {
      id: 'act-theme',
      group: 'Actions',
      label: 'Toggle light / dark theme',
      icon: 'moon',
      keywords: 'appearance mode color',
      run: () => this.theme.toggle(),
    },
  ];

  readonly results = computed(() => {
    const q = this.query().trim().toLowerCase();
    if (!q) return this.commands;
    const terms = q.split(/\s+/);
    return this.commands
      .map((c) => {
        const hay = `${c.label} ${c.hint ?? ''} ${c.keywords} ${c.group}`.toLowerCase();
        if (!terms.every((t) => hay.includes(t))) return null;
        const score = c.label.toLowerCase().startsWith(q) ? 0 : c.label.toLowerCase().includes(q) ? 1 : 2;
        return { c, score };
      })
      .filter((x): x is { c: Command; score: number } => !!x)
      .sort((a, b) => a.score - b.score)
      .map((x) => x.c);
  });

  readonly grouped = computed(() => {
    const out: { group: string; items: { cmd: Command; index: number }[] }[] = [];
    this.results().forEach((cmd, index) => {
      let g = out.find((x) => x.group === cmd.group);
      if (!g) out.push((g = { group: cmd.group, items: [] }));
      g.items.push({ cmd, index });
    });
    return out;
  });

  constructor() {
    effect(() => {
      if (this.open()) {
        this.query.set('');
        this.cursor.set(0);
        document.body.style.overflow = 'hidden';
        queueMicrotask(() => this.inputRef()?.nativeElement.focus());
      } else {
        document.body.style.overflow = '';
      }
    });
  }

  onGlobalKey(e: KeyboardEvent): void {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      this.openChange.emit(!this.open());
      return;
    }
    if (!this.open()) return;

    const n = this.results().length;
    if (e.key === 'Escape') {
      e.preventDefault();
      this.close();
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      this.move(n ? (this.cursor() + 1) % n : 0);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      this.move(n ? (this.cursor() - 1 + n) % n : 0);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      const cmd = this.results()[this.cursor()];
      if (cmd) this.execute(cmd);
    }
  }

  setQuery(v: string): void {
    this.query.set(v);
    this.cursor.set(0);
  }

  move(i: number): void {
    this.cursor.set(i);
    queueMicrotask(() =>
      this.listRef()?.nativeElement.querySelector(`[data-index="${i}"]`)?.scrollIntoView({ block: 'nearest' }),
    );
  }

  execute(cmd: Command): void {
    this.close();
    // let the overlay unmount before scrolling / opening modals
    setTimeout(() => cmd.run(), 10);
  }

  close(): void {
    this.openChange.emit(false);
  }
}
