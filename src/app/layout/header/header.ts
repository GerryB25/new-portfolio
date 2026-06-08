import { Component, computed, inject, signal } from '@angular/core';
import { Router, RouterLink, NavigationEnd } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { filter, map } from 'rxjs';
import { appSwal } from '../../shared/utils/swal';
import { MatIcon } from '@angular/material/icon';

interface NavRoutes {
    route: string;
    label: string;
}

@Component({
    selector: 'app-header',
    imports: [RouterLink, MatIcon],
    templateUrl: './header.html',
    styleUrl: './header.scss',
})
export class Header {
    private readonly router = inject(Router);
    private readonly resumeFrontendPath = 'Luis_Gerardo_De_La_Cruz_Frontend_Engineer_CV.pdf';
    private readonly resumeMobilePath = 'Luis_Gerardo_De_La_Cruz_Mobile_Developer_CV.pdf';
    readonly menuOpen = signal(false);

    urls: NavRoutes[] = [
        { route: '/inicio', label: 'Inicio' },
        { route: '/experiencia', label: 'Experiencia' },
        { route: '/proyectos', label: 'Proyectos' },
        { route: '/contacto', label: 'Contacto' },
    ];

    readonly currentUrl = toSignal(
        this.router.events.pipe(
            filter((e): e is NavigationEnd => e instanceof NavigationEnd),
            map(() => this.router.url),
        ),
        { initialValue: this.router.url },
    );

    readonly selected = computed(() => this.currentUrl());

    isActive(path: string): boolean {
        return this.currentUrl() === path;
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
