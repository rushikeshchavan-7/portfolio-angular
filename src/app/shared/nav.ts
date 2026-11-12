export interface NavSection {
  id: string;
  label: string;
}

export const NAV_SECTIONS: NavSection[] = [
  { id: 'about', label: 'About' },
  { id: 'capabilities', label: 'Expertise' },
  { id: 'projects', label: 'Work' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'certificates', label: 'Certificates' },
  { id: 'contact', label: 'Contact' },
];

export function scrollToSection(id: string): void {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
