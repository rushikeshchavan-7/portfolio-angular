import { Directive, ElementRef, OnDestroy, OnInit, inject, input } from '@angular/core';

/** Adds `.is-in` when the element scrolls into view. Pair with the `.reveal` class in styles.scss. */
@Directive({
  selector: '[reveal]',
  host: { class: 'reveal' },
})
export class RevealDirective implements OnInit, OnDestroy {
  private el = inject(ElementRef<HTMLElement>);
  private io?: IntersectionObserver;

  /** Stagger delay in ms. */
  readonly revealDelay = input<number>(0);

  ngOnInit(): void {
    const node = this.el.nativeElement as HTMLElement;
    node.style.setProperty('--reveal-delay', `${this.revealDelay()}ms`);
    if (!('IntersectionObserver' in window)) {
      node.classList.add('is-in');
      return;
    }
    this.io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            node.classList.add('is-in');
            this.io?.disconnect();
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    );
    this.io.observe(node);
  }

  ngOnDestroy(): void {
    this.io?.disconnect();
  }
}
