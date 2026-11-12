import { Component, input } from '@angular/core';

export type IconName =
  | 'brain' | 'server' | 'layout' | 'chart' | 'cloud' | 'compass'
  | 'github' | 'linkedin' | 'instagram' | 'mail' | 'phone' | 'resume'
  | 'arrow-up-right' | 'arrow-right' | 'sun' | 'moon' | 'search' | 'close'
  | 'copy' | 'check' | 'sparkle' | 'award' | 'book' | 'command' | 'menu' | 'external';

/** Inline stroke icons (Lucide-style, 24px grid). */
@Component({
  selector: 'app-icon',
  host: { class: 'app-icon', '[style.width.px]': 'size()', '[style.height.px]': 'size()' },
  template: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" [attr.stroke-width]="stroke()"
      stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" width="100%" height="100%">
      @switch (name()) {
        @case ('brain') {
          <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/>
          <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"/>
          <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"/><path d="M12 18V5"/>
        }
        @case ('server') {
          <rect x="2" y="3" width="20" height="8" rx="2"/><rect x="2" y="13" width="20" height="8" rx="2"/>
          <path d="M6 7h.01M6 17h.01"/>
        }
        @case ('layout') {
          <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>
        }
        @case ('chart') {
          <path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/>
        }
        @case ('cloud') {
          <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>
        }
        @case ('compass') {
          <circle cx="12" cy="12" r="10"/><path d="m16.24 7.76-2.12 6.36-6.36 2.12 2.12-6.36z"/>
        }
        @case ('github') {
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65S8.93 17.38 9 18v4"/>
          <path d="M9 18c-4.51 2-5-2-7-2"/>
        }
        @case ('linkedin') {
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/>
          <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
        }
        @case ('instagram') {
          <rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
          <path d="M17.5 6.5h.01"/>
        }
        @case ('mail') {
          <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
        }
        @case ('phone') {
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>
        }
        @case ('resume') {
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/>
        }
        @case ('arrow-up-right') { <path d="M7 17 17 7M7 7h10v10"/> }
        @case ('arrow-right') { <path d="M5 12h14M12 5l7 7-7 7"/> }
        @case ('external') { <path d="M15 3h6v6M10 14 21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/> }
        @case ('sun') {
          <circle cx="12" cy="12" r="4"/>
          <path d="M12 2v2M12 20v2m-7.07-14.07 1.41 1.41m11.32 11.32 1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>
        }
        @case ('moon') { <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/> }
        @case ('search') { <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/> }
        @case ('close') { <path d="M18 6 6 18M6 6l12 12"/> }
        @case ('copy') { <rect x="8" y="8" width="14" height="14" rx="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/> }
        @case ('check') { <path d="M20 6 9 17l-5-5"/> }
        @case ('sparkle') {
          <path d="M9.94 14.06 4 20M12 3l1.9 5.8L20 11l-6.1 2.2L12 19l-1.9-5.8L4 11l6.1-2.2Z"/>
        }
        @case ('award') { <circle cx="12" cy="8" r="6"/><path d="M15.48 12.89 17 22l-5-3-5 3 1.52-9.11"/> }
        @case ('book') { <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/> }
        @case ('command') { <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"/> }
        @case ('menu') { <path d="M4 7h16M4 12h16M4 17h16"/> }
      }
    </svg>
  `,
  styles: [':host{display:inline-flex;flex-shrink:0}'],
})
export class IconComponent {
  readonly name = input.required<IconName>();
  readonly size = input<number>(18);
  readonly stroke = input<number>(1.75);
}
