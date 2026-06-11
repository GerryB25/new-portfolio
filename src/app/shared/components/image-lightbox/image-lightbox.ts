import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';
import { ImageCarousel } from '../image-carousel/image-carousel';

export interface LightboxData {
  images: string[];
  alt: string;
  index: number;
}

@Component({
  selector: 'app-image-lightbox',
  imports: [ImageCarousel, MatIcon],
  templateUrl: './image-lightbox.html',
  styleUrl: './image-lightbox.scss',
})
export class ImageLightbox {
  readonly data = inject<LightboxData>(MAT_DIALOG_DATA);
  private readonly ref = inject(MatDialogRef<ImageLightbox>);

  close(): void {
    this.ref.close();
  }
}
