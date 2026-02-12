import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { siteConfig } from '../services/config';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class ContactComponent {
  contact = siteConfig.contact;
}
