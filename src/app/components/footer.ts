import { Component } from '@angular/core';
import { siteConfig } from '../services/config';
import { IconComponent } from '../shared/icon';

@Component({
  selector: 'app-footer',
  imports: [IconComponent],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class FooterComponent {
  readonly name = siteConfig.hero.name;
  readonly links = siteConfig.socials;
  readonly year = new Date().getFullYear();

  toTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
