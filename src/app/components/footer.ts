import { Component } from '@angular/core';
import { siteConfig } from '../services/config';

@Component({
  selector: 'app-footer',
  imports: [],
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
