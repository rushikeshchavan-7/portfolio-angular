import { Component, HostListener, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { siteConfig } from '../services/config';

interface SectionItem {
  id: string;
  label: string;
}

@Component({
  selector: 'app-side-elements',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './side-elements.html',
  styleUrl: './side-elements.scss',
})
export class SideElementsComponent {
  scrollProgress = signal(0);
  viewportWidth = signal(window.innerWidth);
  activeSectionIndex = signal(0);

  sections = computed<SectionItem[]>(() => this.buildSections());
  visible = computed(() => this.viewportWidth() >= 1080);

  private buildSections(): SectionItem[] {
    const cfg = siteConfig.sections;
    const map: [keyof typeof cfg, string, string][] = [
      ['hero', 'about', 'About'],
      ['skills', 'skills', 'Skills'],
      ['experience', 'experience', 'Experience'],
      ['projects', 'projects', 'Projects'],
      ['education', 'education', 'Education'],
      ['certificates', 'certificates', 'Certificates'],
      ['contact', 'contact', 'Contact'],
    ];
    return map.filter(([key]) => cfg[key]).map(([, id, label]) => ({ id, label }));
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.handleScroll();
  }

  @HostListener('window:resize')
  onResize(): void {
    this.viewportWidth.set(window.innerWidth);
  }

  private handleScroll(): void {
    const doc = document.documentElement;
    const scrollTop = window.scrollY;
    const scrollHeight = doc.scrollHeight - doc.clientHeight;
    this.scrollProgress.set(scrollHeight > 0 ? scrollTop / scrollHeight : 0);

    const secs = this.sections();
    if (secs.length === 0) return;

    let active = 0;
    const viewMid = scrollTop + window.innerHeight * 0.4;
    for (let i = 0; i < secs.length; i++) {
      const el = document.getElementById(secs[i].id);
      if (el) {
        const elTop = el.getBoundingClientRect().top + scrollTop;
        if (viewMid >= elTop) active = i;
      }
    }
    this.activeSectionIndex.set(active);
  }

  scrollToSection(section: SectionItem): void {
    document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' });
  }

  getSectionTop(index: number): number {
    const len = this.sections().length;
    if (len <= 1) return index === 0 ? 0 : 100;
    return (index / (len - 1)) * 100;
  }
}
