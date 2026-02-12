import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { siteConfig } from '../services/config';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class ExperienceComponent {
  experiences = siteConfig.experiences;
}
