import { afterNextRender, Component, OnDestroy, signal } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { appSwal } from '../../shared/utils/swal';

interface NavItem {
    id: string;
    label: string;
}

@Component({
    selector: 'app-header',
    imports: [MatIcon],
    templateUrl: './header.html',
    styleUrl: './header.scss',
})
export class Header implements OnDestroy {
    private observer?: IntersectionObserver;

    constructor() {
        afterNextRender(() => this.setupScrollSpy());
    }

    private setupScrollSpy(retries = 10): void {
        const sections = this.urls
            .map(({ id }) => document.getElementById(id))
            .filter((el): el is HTMLElement => el !== null);

        if (!sections.length) {
            if (retries > 0) requestAnimationFrame(() => this.setupScrollSpy(retries - 1));
            return;
        }

        this.observer = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (entry.isIntersecting) this.activeSection.set(entry.target.id);
                }
            },
            { rootMargin: '-50% 0px -50% 0px', threshold: 0 },
        );
        sections.forEach((el) => this.observer!.observe(el));
    }

    ngOnDestroy(): void {
        this.observer?.disconnect();
    }

    private readonly resumeFrontendPath = 'Luis_Gerardo_De_La_Cruz_Frontend_Engineer_CV.pdf';
    private readonly resumeMobilePath = 'Luis_Gerardo_De_La_Cruz_Mobile_Developer_CV.pdf';

    readonly menuOpen = signal(false);
    readonly activeSection = signal('inicio');

    /** Cada item apunta al `id` de su sección en la página. */
    readonly urls: NavItem[] = [
        { id: 'inicio', label: 'Inicio' },
        { id: 'sobre-mi', label: 'Sobre mí' },
        { id: 'experiencia', label: 'Experiencia' },
        { id: 'proyectos', label: 'Proyectos' },
    ];

    /** Hace scroll suave hacia la sección (compensando el header fijo). */
    scrollTo(id: string): void {
        const el = document.getElementById(id);
        if (!el) return;
        const headerOffset = 80; // h-20 = 5rem
        const top = el.getBoundingClientRect().top + window.scrollY - headerOffset;
        window.scrollTo({ top, behavior: 'smooth' });
        this.activeSection.set(id);
        this.closeMenu();
    }

    isActive(id: string): boolean {
        return this.activeSection() === id;
    }

    toggleMenu() {
        this.menuOpen.update((open) => !open);
    }

    closeMenu() {
        this.menuOpen.set(false);
    }

    downloadResume() {
        appSwal
            .fire({
                title: 'Descargar CV',
                text: '¿Cual perfil deseas descargar?',
                iconHtml:
                    '<span class="material-icons" style="font-size: 3rem;">description</span>',
                showDenyButton: true,
                confirmButtonText: 'Desarrollador Mobile',
                denyButtonText: 'Desarrollador Frontend',
            })
            .then((result) => {
                if (result.isConfirmed) {
                    this.downloadMobileCv();
                } else if (result.isDenied) {
                    this.downloadFrontendCv();
                }
            });
    }

    private downloadFrontendCv() {
        const link = document.createElement('a');
        link.href = this.resumeFrontendPath;
        link.download = 'Luis_Gerardo_De_La_Cruz_Frontend.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    private downloadMobileCv() {
        const link = document.createElement('a');
        link.href = this.resumeMobilePath;
        link.download = 'Luis_Gerardo_De_La_Cruz_Mobile.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
}
