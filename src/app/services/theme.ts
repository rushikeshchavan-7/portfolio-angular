import { Injectable, signal, effect } from '@angular/core';
import { siteConfig } from './config';

export interface Theme {
  bg: string; bgAlt: string; surface: string; surfaceHover: string;
  text: string; textSecondary: string; textTertiary: string; textFaint: string;
  border: string; borderHover: string;
  c1: string; c1Light: string; c1Faint: string;
  c2: string; c2Light: string; c2Faint: string;
  c3: string; c3Light: string; c3Faint: string;
  navBg: string; btnBg: string; btnText: string;
  tagBg: string; tagBorder: string; tagText: string;
  dotColor: string; shadow: string; mode: string;
}

export const darkTheme: Theme = {
  bg: '#000000', bgAlt: '#050505', surface: 'rgba(255,255,255,0.02)', surfaceHover: 'rgba(255,255,255,0.04)',
  text: '#ededed', textSecondary: 'rgba(255,255,255,0.5)', textTertiary: 'rgba(255,255,255,0.3)', textFaint: 'rgba(255,255,255,0.15)',
  border: 'rgba(255,255,255,0.06)', borderHover: 'rgba(255,255,255,0.12)',
  c1: '#3b82f6', c1Light: 'rgba(59,130,246,0.12)', c1Faint: 'rgba(59,130,246,0.06)',
  c2: '#8b5cf6', c2Light: 'rgba(139,92,246,0.12)', c2Faint: 'rgba(139,92,246,0.06)',
  c3: '#10b981', c3Light: 'rgba(16,185,129,0.12)', c3Faint: 'rgba(16,185,129,0.06)',
  navBg: 'rgba(0,0,0,0.7)', btnBg: '#fff', btnText: '#000',
  tagBg: 'rgba(255,255,255,0.03)', tagBorder: 'rgba(255,255,255,0.06)', tagText: 'rgba(255,255,255,0.5)',
  dotColor: 'rgba(255,255,255,0.03)', shadow: 'rgba(0,0,0,0.4)', mode: 'dark',
};

export const lightTheme: Theme = {
  bg: '#ffffff', bgAlt: '#f5f5f7', surface: '#ffffff', surfaceHover: '#f0f0f2',
  text: '#1d1d1f', textSecondary: '#6e6e73', textTertiary: '#86868b', textFaint: 'rgba(0,0,0,0.12)',
  border: 'rgba(0,0,0,0.12)', borderHover: 'rgba(0,0,0,0.2)',
  c1: '#2563eb', c1Light: 'rgba(37,99,235,0.1)', c1Faint: 'rgba(37,99,235,0.05)',
  c2: '#7c3aed', c2Light: 'rgba(124,58,237,0.1)', c2Faint: 'rgba(124,58,237,0.05)',
  c3: '#059669', c3Light: 'rgba(5,150,105,0.1)', c3Faint: 'rgba(5,150,105,0.05)',
  navBg: 'rgba(255,255,255,0.85)', btnBg: '#1d1d1f', btnText: '#fff',
  tagBg: '#f5f5f7', tagBorder: 'rgba(0,0,0,0.1)', tagText: '#6e6e73',
  dotColor: 'rgba(0,0,0,0.05)', shadow: 'rgba(0,0,0,0.08)', mode: 'light',
};

@Injectable({ providedIn: 'root' })
export class ThemeService {
  isDark = signal(this.getInitialTheme());
  theme = signal<Theme>(this.isDark() ? darkTheme : lightTheme);

  constructor() {
    effect(() => {
      const dark = this.isDark();
      this.theme.set(dark ? darkTheme : lightTheme);
      localStorage.setItem('theme', dark ? 'dark' : 'light');
      this.applyThemeToBody(dark);
    });
  }

  private getInitialTheme(): boolean {
    const saved = localStorage.getItem('theme');
    return saved ? saved === 'dark' : siteConfig.settings.defaultTheme === 'dark';
  }

  toggle(): void {
    this.isDark.update(v => !v);
  }

  private applyThemeToBody(dark: boolean): void {
    const t = dark ? darkTheme : lightTheme;
    const root = document.documentElement;
    Object.entries(t).forEach(([key, value]) => {
      root.style.setProperty(`--${key}`, value);
    });
  }
}
