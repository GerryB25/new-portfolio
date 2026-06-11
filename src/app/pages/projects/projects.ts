import { Component, inject } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { IconLabel } from "../../shared/components/icon-label/icon-label";
import { MatIcon } from "@angular/material/icon";
import { ImageCarousel } from "../../shared/components/image-carousel/image-carousel";
import { ImageLightbox } from "../../shared/components/image-lightbox/image-lightbox";

interface Project {
    images: string[];
    title: string;
    description: string;
    tags: string[];
    demoUrl: string;
    codeUrl: string;
}

@Component({
    selector: 'app-projects',
    imports: [IconLabel, MatIcon, ImageCarousel, MatDialogModule],
    templateUrl: './projects.html',
    styleUrl: './projects.scss',
})
export class Projects {
    private readonly dialog = inject(MatDialog);

    readonly projects: Project[] = [
        {
            images: [
                'lazuli/lazuli-app.webp',
                'lazuli/lazuli1-app.webp',
                'lazuli/lazuli2-app.webp',
            ],
            title: 'Lazuli Dashboard Template',
            description:
                'Plantilla de dashboard para aplicaciones web modernas y responsivas. Lista para producción, con autenticación JWT y gestión de roles.',
            tags: ['Angular', 'Tailwind CSS', 'TypeScript'],
            demoUrl: 'https://angular-lazuli-preview-2026.dev-gerardocgweb.workers.dev/auth/login',
            codeUrl: '#',
        },
        {
            images: [
                'medical/medical-app.webp',
                'medical/medical1-app.webp',
                'medical/medical2-app.webp',
            ],
            title: 'Medical Product Landing Page',
            description:
                'Landing page para producto médico, diseñada para destacar características clave y generar conversiones. Enfocada en la experiencia del usuario y optimizada para dispositivos móviles.',
            tags: ['Astro', 'Tailwind CSS'],
            demoUrl: 'https://medical-product-landingpage.vercel.app/',
            codeUrl: '#',
        },
    ];

    openLightbox(images: string[], alt: string, index: number): void {
        this.dialog.open(ImageLightbox, {
            data: { images, alt, index },
            panelClass: 'lightbox-panel',
            maxWidth: '95vw',
            autoFocus: false,
        });
    }
}
