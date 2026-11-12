import { Component, computed, signal } from '@angular/core';
import { siteConfig, Certificate } from '../services/config';
import { IconComponent } from '../shared/icon';
import { RevealDirective } from '../shared/reveal.directive';
import { SpotlightDirective } from '../shared/spotlight.directive';

const AI_KEYWORDS = ['AI', 'LLMs', 'LangGraph', 'LangChain', 'AI Agents', 'Prompt Engineering', 'Machine Learning'];

@Component({
  selector: 'app-certificates',
  imports: [IconComponent, RevealDirective, SpotlightDirective],
  templateUrl: './certificates.html',
  styleUrl: './certificates.scss',
})
export class CertificatesComponent {
  private readonly all = siteConfig.certificates;
  readonly expanded = signal(false);
  readonly initial = 6;
  readonly shown = computed<Certificate[]>(() => (this.expanded() ? this.all : this.all.slice(0, this.initial)));
  readonly total = this.all.length;

  isAi(c: Certificate): boolean {
    return c.skills.some((s) => AI_KEYWORDS.includes(s));
  }

  initials(issuer: string): string {
    return issuer
      .split(/\s+/)
      .filter((w) => /^[A-Za-z]/.test(w))
      .slice(0, 2)
      .map((w) => w[0].toUpperCase())
      .join('');
  }

  imgError(e: Event): void {
    const img = e.target as HTMLImageElement;
    img.style.display = 'none';
    img.parentElement?.classList.add('fallback');
  }
}
