import { Component, signal } from '@angular/core';
import { siteConfig } from '../services/config';
import { IconComponent, IconName } from '../shared/icon';
import { RevealDirective } from '../shared/reveal.directive';

@Component({
  selector: 'app-contact',
  imports: [IconComponent, RevealDirective],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class ContactComponent {
  readonly contact = siteConfig.contact;
  readonly socials = siteConfig.socials.filter((s) => s.label !== 'Email');
  readonly copied = signal(false);
  private timer?: ReturnType<typeof setTimeout>;

  get tel(): string {
    return 'tel:' + this.contact.phone.replace(/\s/g, '');
  }

  iconFor(label: string): IconName {
    const map: Record<string, IconName> = { GitHub: 'github', LinkedIn: 'linkedin', Instagram: 'instagram' };
    return map[label] ?? 'external';
  }

  async copyEmail(): Promise<void> {
    try {
      await navigator.clipboard.writeText(this.contact.email);
      this.copied.set(true);
      clearTimeout(this.timer);
      this.timer = setTimeout(() => this.copied.set(false), 1800);
    } catch {
      window.location.href = 'mailto:' + this.contact.email;
    }
  }
}
