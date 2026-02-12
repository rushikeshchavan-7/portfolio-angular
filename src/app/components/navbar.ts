import { Component, HostListener, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { siteConfig } from '../services/config';
import { ThemeService } from '../services/theme';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class NavbarComponent {
  themeService = inject(ThemeService);

  scrollY = signal(0);
  mobileOpen = signal(false);

  heroName = siteConfig.hero.name;
  navSections = [
    siteConfig.sections.hero ? { id: 'about', label: 'About' } : null,
    siteConfig.sections.skills ? { id: 'skills', label: 'Skills' } : null,
    siteConfig.sections.experience ? { id: 'experience', label: 'Experience' } : null,
    siteConfig.sections.projects ? { id: 'projects', label: 'Projects' } : null,
    siteConfig.sections.education ? { id: 'education', label: 'Education' } : null,
    siteConfig.sections.certificates ? { id: 'certificates', label: 'Certificates' } : null,
    siteConfig.sections.contact ? { id: 'contact', label: 'Contact' } : null,
  ].filter(Boolean) as { id: string; label: string }[];

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrollY.set(window.scrollY);
  }

  scrollTo(id: string): void {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    this.mobileOpen.set(false);
  }

  toggleTheme(): void {
    this.themeService.toggle();
  }

  toggleMobile(): void {
    this.mobileOpen.update(v => !v);
  }
}
