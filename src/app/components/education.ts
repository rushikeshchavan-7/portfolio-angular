import { Component } from '@angular/core';
import { siteConfig } from '../services/config';
import { RevealDirective } from '../shared/reveal.directive';

@Component({
  selector: 'app-education',
  imports: [RevealDirective],
  templateUrl: './education.html',
  styleUrl: './education.scss',
})
export class EducationComponent {
  readonly items = siteConfig.education;

  logoError(e: Event): void {
    (e.target as HTMLImageElement).style.visibility = 'hidden';
  }
}
