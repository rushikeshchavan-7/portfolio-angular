import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { siteConfig } from '../services/config';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class FooterComponent {
  footer = siteConfig.footer;
  currentYear = new Date().getFullYear();
}
