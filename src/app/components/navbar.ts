import { Component, computed, inject, output, signal } from '@angular/core';
import { ThemeService } from '../services/theme';
import { siteConfig } from '../services/config';
import { IconComponent } from '../shared/icon';
import { NAV_SECTIONS, scrollToSection } from '../shared/nav';

@Component({
  selector: 'app-navbar',
  imports: [IconComponent],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
  host: {
    '(window:scroll)': 'onScroll()',
    '(window:resize)': 'onScroll()',
  },
})
export class NavbarComponent {
  readonly theme = inject(ThemeService);
  readonly openPalette = output<void>();

  readonly sections = NAV_SECTIONS.filter((s) => s.id !== 'about');
  readonly name = siteConfig.hero.name;
  readonly isMac = /Mac|iPhone|iPad/.test(navigator.platform);

  readonly scrollY = signal(0);
  readonly progress = signal(0);
  readonly active = signal('about');
  readonly mobileOpen = signal(false);
  readonly scrolled = computed(() => this.scrollY() > 12);

  onScroll(): void {
    const y = window.scrollY;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    this.scrollY.set(y);
    this.progress.set(max > 0 ? Math.min(1, y / max) : 0);

    const probe = y + window.innerHeight * 0.35;
    let current = 'about';
    for (const s of NAV_SECTIONS) {
      const el = document.getElementById(s.id);
      if (el && el.offsetTop <= probe) current = s.id;
    }
    // Last section is short; treat bottom of page as contact.
    if (max > 0 && y >= max - 4) current = NAV_SECTIONS[NAV_SECTIONS.length - 1].id;
    this.active.set(current);
  }

  go(id: string, e?: Event): void {
    e?.preventDefault();
    scrollToSection(id);
    this.mobileOpen.set(false);
  }
}
