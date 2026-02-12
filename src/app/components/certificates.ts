import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { siteConfig, Certificate } from '../services/config';

interface CertView extends Certificate {
  embedUrl: SafeResourceUrl | null;
  isDrive: boolean;
  fallbackImg: string;
}

@Component({
  selector: 'app-certificates',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './certificates.html',
  styleUrl: './certificates.scss',
})
export class CertificatesComponent {
  certs: CertView[];

  constructor(private sanitizer: DomSanitizer) {
    this.certs = siteConfig.certificates.map((cert) => {
      const driveMatch = cert.link.match(/drive\.google\.com\/file\/d\/([^/]+)/);
      return {
        ...cert,
        isDrive: !!driveMatch,
        embedUrl: driveMatch
          ? this.sanitizer.bypassSecurityTrustResourceUrl(
              `https://drive.google.com/file/d/${driveMatch[1]}/preview`
            )
          : null,
        // Auto-generated avatar from issuer name — used if image fails or is missing
        fallbackImg: `https://ui-avatars.com/api/?name=${encodeURIComponent(cert.issuer)}&size=128&background=3b82f6&color=fff&bold=true&rounded=true`,
      };
    });
  }

  onImgError(event: Event, cert: CertView): void {
    // If the provided image URL fails, swap to auto-generated avatar
    (event.target as HTMLImageElement).src = cert.fallbackImg;
  }
}
