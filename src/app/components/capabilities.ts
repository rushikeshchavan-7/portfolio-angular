import { Component } from '@angular/core';
import { siteConfig } from '../services/config';
import { IconComponent } from '../shared/icon';
import { RevealDirective } from '../shared/reveal.directive';
import { SpotlightDirective } from '../shared/spotlight.directive';

@Component({
  selector: 'app-capabilities',
  imports: [IconComponent, RevealDirective, SpotlightDirective],
  templateUrl: './capabilities.html',
  styleUrl: './capabilities.scss',
})
export class CapabilitiesComponent {
  readonly caps = siteConfig.capabilities;

  hideBroken(e: Event): void {
    (e.target as HTMLImageElement).style.display = 'none';
  }
}
