import { Directive, ElementRef, inject } from '@angular/core';

/**
 * Tracks the pointer inside the element and exposes it as --mx / --my (px),
 * used by `.spotlight` cards for the cursor-follow glow and border light.
 */
@Directive({
  selector: '[spotlight]',
  host: {
    class: 'spotlight',
    '(pointermove)': 'move($event)',
  },
})
export class SpotlightDirective {
  private el = inject(ElementRef<HTMLElement>);

  move(e: PointerEvent): void {
    const node = this.el.nativeElement as HTMLElement;
    const r = node.getBoundingClientRect();
    node.style.setProperty('--mx', `${e.clientX - r.left}px`);
    node.style.setProperty('--my', `${e.clientY - r.top}px`);
  }
}
