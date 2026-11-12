import { Injectable, signal, effect } from '@angular/core';
import { siteConfig } from './config';

const STORAGE_KEY = 'rc-theme-v2';

/**
 * Theme tokens live in styles.scss under [data-theme]. This service only flips the attribute
 * and remembers the visitor's choice. Dark is the default.
 */
@Injectable({ providedIn: 'root' })
export class ThemeService {
  readonly isDark = signal(this.initial());

  constructor() {
    effect(() => {
      const mode = this.isDark() ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', mode);
      try {
        localStorage.setItem(STORAGE_KEY, mode);
      } catch {
        /* storage unavailable — ignore */
      }
    });
  }

  toggle(): void {
    this.isDark.update((v) => !v);
  }

  private initial(): boolean {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) return saved === 'dark';
    } catch {
      /* ignore */
    }
    return siteConfig.settings.defaultTheme === 'dark';
  }
}
