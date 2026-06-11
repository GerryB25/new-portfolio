import { Component, computed, input, linkedSignal, output } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-image-carousel',
  imports: [MatIcon],
  templateUrl: './image-carousel.html',
  styleUrl: './image-carousel.scss',
})
export class ImageCarousel {
  /** Lista de URLs de imágenes a mostrar. */
  readonly images = input<string[]>([]);
  /** Texto alternativo para las imágenes. */
  readonly alt = input('');
  /** Índice inicial. */
  readonly startIndex = input(0);
  /** Ajuste de la imagen: recortar ('cover') o mostrar completa ('contain'). */
  readonly fit = input<'cover' | 'contain'>('cover');
  /** Si es true, las imágenes son clicables (cursor lupa + evento). */
  readonly zoomable = input(true);

  /** Se emite (con el índice actual) al hacer click en la imagen. */
  readonly imageClick = output<number>();

  /** Índice de la imagen visible (arranca en startIndex). */
  readonly index = linkedSignal(() => this.startIndex());
  /** Desplazamiento del track en %. */
  readonly offset = computed(() => -this.index() * 100);

  next(): void {
    const total = this.images().length;
    if (total) this.index.set((this.index() + 1) % total);
  }

  prev(): void {
    const total = this.images().length;
    if (total) this.index.set((this.index() - 1 + total) % total);
  }

  goTo(i: number): void {
    this.index.set(i);
  }

  onImageClick(): void {
    if (this.zoomable()) this.imageClick.emit(this.index());
  }
}
