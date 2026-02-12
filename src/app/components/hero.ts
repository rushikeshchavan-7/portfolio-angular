import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { siteConfig } from '../services/config';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class HeroComponent {
  config = siteConfig;
  hero = siteConfig.hero;

  get roleText(): string {
    return this.hero.roles;
  }

  get avatarSrc(): string {
    return this.hero.image || '/HeroImage.png';
  }


  getStatColor(color: 'c1' | 'c2' | 'c3'): string {
    const map = { c1: 'var(--c1)', c2: 'var(--c2)', c3: 'var(--c3)' };
    return map[color];
  }
}
