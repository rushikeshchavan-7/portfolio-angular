import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  effect,
  inject,
  viewChild,
} from '@angular/core';
import { ThemeService } from '../services/theme';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  hue: 0 | 1;
}

/**
 * A lightweight canvas "neural field": drifting nodes that link to their neighbours and
 * lean toward the pointer. Pauses off-screen / in background tabs, static under reduced motion.
 */
@Component({
  selector: 'app-neural-field',
  template: `<canvas #c aria-hidden="true"></canvas>`,
  styles: [
    `:host{position:absolute;inset:0;display:block;pointer-events:none}
     canvas{width:100%;height:100%;display:block;
       mask-image:radial-gradient(ellipse 75% 70% at 60% 45%,#000 35%,transparent 80%);
       -webkit-mask-image:radial-gradient(ellipse 75% 70% at 60% 45%,#000 35%,transparent 80%)}`,
  ],
})
export class NeuralFieldComponent implements AfterViewInit, OnDestroy {
  private canvasRef = viewChild.required<ElementRef<HTMLCanvasElement>>('c');
  private theme = inject(ThemeService);

  private ctx!: CanvasRenderingContext2D;
  private nodes: Node[] = [];
  private w = 0;
  private h = 0;
  private dpr = 1;
  private raf = 0;
  private running = false;
  private visible = true;
  private pointer = { x: -9999, y: -9999 };
  private colors: [string, string] = ['167,139,250', '34,211,238'];
  private dark = true;
  private io?: IntersectionObserver;
  private ro?: ResizeObserver;
  private reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  private onPointer = (e: PointerEvent) => {
    const r = this.canvasRef().nativeElement.getBoundingClientRect();
    this.pointer.x = e.clientX - r.left;
    this.pointer.y = e.clientY - r.top;
  };
  private onLeave = () => (this.pointer = { x: -9999, y: -9999 });
  private onVis = () => this.sync();

  constructor() {
    effect(() => {
      this.dark = this.theme.isDark();
      this.colors = this.dark ? ['167,139,250', '34,211,238'] : ['124,58,237', '8,145,178'];
      if (this.ctx && !this.running) this.draw();
    });
  }

  ngAfterViewInit(): void {
    const canvas = this.canvasRef().nativeElement;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    this.ctx = ctx;

    this.ro = new ResizeObserver(() => this.resize());
    this.ro.observe(canvas);
    this.resize();

    this.io = new IntersectionObserver(([e]) => {
      this.visible = e.isIntersecting;
      this.sync();
    });
    this.io.observe(canvas);

    window.addEventListener('pointermove', this.onPointer, { passive: true });
    document.addEventListener('pointerleave', this.onLeave);
    document.addEventListener('visibilitychange', this.onVis);
    this.sync();
  }

  ngOnDestroy(): void {
    cancelAnimationFrame(this.raf);
    this.running = false;
    this.io?.disconnect();
    this.ro?.disconnect();
    window.removeEventListener('pointermove', this.onPointer);
    document.removeEventListener('pointerleave', this.onLeave);
    document.removeEventListener('visibilitychange', this.onVis);
  }

  private sync(): void {
    const should = this.visible && !document.hidden && !this.reduced;
    if (should && !this.running) {
      this.running = true;
      this.loop();
    } else if (!should && this.running) {
      this.running = false;
      cancelAnimationFrame(this.raf);
    }
  }

  private resize(): void {
    const canvas = this.canvasRef().nativeElement;
    const rect = canvas.getBoundingClientRect();
    this.dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.w = rect.width;
    this.h = rect.height;
    canvas.width = Math.round(this.w * this.dpr);
    canvas.height = Math.round(this.h * this.dpr);
    this.ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);

    const target = Math.round(Math.min(110, Math.max(36, (this.w * this.h) / 14000)));
    while (this.nodes.length < target) this.nodes.push(this.spawn());
    this.nodes.length = target;
    for (const n of this.nodes) {
      n.x = Math.min(n.x, this.w);
      n.y = Math.min(n.y, this.h);
    }
    this.draw();
  }

  private spawn(): Node {
    return {
      x: Math.random() * this.w,
      y: Math.random() * this.h,
      vx: (Math.random() - 0.5) * 0.28,
      vy: (Math.random() - 0.5) * 0.28,
      r: Math.random() * 1.4 + 0.8,
      hue: Math.random() > 0.55 ? 1 : 0,
    };
  }

  private loop = () => {
    if (!this.running) return;
    this.step();
    this.draw();
    this.raf = requestAnimationFrame(this.loop);
  };

  private step(): void {
    const { w, h, pointer } = this;
    for (const n of this.nodes) {
      const dx = pointer.x - n.x;
      const dy = pointer.y - n.y;
      const d2 = dx * dx + dy * dy;
      if (d2 < 180 * 180 && d2 > 1) {
        const f = 0.012 * (1 - Math.sqrt(d2) / 180);
        n.vx += dx * f * 0.02;
        n.vy += dy * f * 0.02;
      }
      n.vx *= 0.985;
      n.vy *= 0.985;
      // keep a minimum drift
      if (Math.abs(n.vx) < 0.05) n.vx += (Math.random() - 0.5) * 0.04;
      if (Math.abs(n.vy) < 0.05) n.vy += (Math.random() - 0.5) * 0.04;
      n.x += n.vx;
      n.y += n.vy;
      if (n.x < -10) n.x = w + 10;
      else if (n.x > w + 10) n.x = -10;
      if (n.y < -10) n.y = h + 10;
      else if (n.y > h + 10) n.y = -10;
    }
  }

  private draw(): void {
    const { ctx, nodes, colors, pointer } = this;
    if (!ctx) return;
    ctx.clearRect(0, 0, this.w, this.h);
    const max = 128;
    const max2 = max * max;
    const lineAlpha = this.dark ? 0.28 : 0.22;

    for (let i = 0; i < nodes.length; i++) {
      const a = nodes[i];
      for (let j = i + 1; j < nodes.length; j++) {
        const b = nodes[j];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const d2 = dx * dx + dy * dy;
        if (d2 < max2) {
          const t = 1 - d2 / max2;
          ctx.strokeStyle = `rgba(${colors[a.hue]},${(t * lineAlpha).toFixed(3)})`;
          ctx.lineWidth = t * 1.1;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }

    for (const n of nodes) {
      const dx = pointer.x - n.x;
      const dy = pointer.y - n.y;
      const near = dx * dx + dy * dy < 140 * 140;
      ctx.fillStyle = `rgba(${colors[n.hue]},${near ? 0.95 : 0.6})`;
      ctx.beginPath();
      ctx.arc(n.x, n.y, near ? n.r + 1 : n.r, 0, Math.PI * 2);
      ctx.fill();
    }
  }
}
