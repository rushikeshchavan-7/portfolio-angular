import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { siteConfig, Certificate } from '../services/config';

@Component({
  selector: 'app-certificates',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './certificates.html',
  styleUrl: './certificates.scss',
})
export class CertificatesComponent {
  certificates: Certificate[] = siteConfig.certificates;
}
