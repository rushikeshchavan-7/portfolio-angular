import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { siteConfig } from '../services/config';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.html',
  styleUrl: './education.scss',
})
export class EducationComponent {
  education = siteConfig.education;
}
