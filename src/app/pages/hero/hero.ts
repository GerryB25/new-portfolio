import { Component } from '@angular/core';
import { MatTooltip } from "@angular/material/tooltip";
import { IconLabel } from '../../shared/components/icon-label/icon-label';
import { appSwal } from '../../shared/utils/swal';

@Component({
    selector: 'app-hero',
    imports: [MatTooltip, IconLabel],
    templateUrl: './hero.html',
    styleUrl: './hero.scss',
})
export class Hero {
    /** Datos de contacto (edítalos aquí). */
    private readonly contact = {
        github: 'https://github.com/gerrybogard',
        githubLabel: '@gerrybogard',
        linkedin: 'https://www.linkedin.com/in/luis-gerardo-de-la-cruz',
        linkedinLabel: 'Luis Gerardo De La Cruz',
        email: 'dev.gerardocgweb@gmail.com',
        phone: '+52 5639151464',
    };

    openContact(): void {
        const c = this.contact;

        const githubIcon = `<svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.2.8-.5v-1.8c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17 4.6 18 4.9 18 4.9c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.5-2.7 5.5-5.3 5.8.4.4.8 1.1.8 2.2v3.3c0 .3.2.6.8.5 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5z"/></svg>`;
        const linkedinIcon = `<svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/></svg>`;

        appSwal.fire({
            title: 'Contáctame',
            html: `
                <p class="swal-contact__lead">
                    ¿Tienes un proyecto en mente o una oportunidad laboral? Escríbeme por el
                    canal que prefieras y con gusto te respondo.
                </p>
                <div class="swal-contact">
                    <a class="swal-contact__row" href="${c.github}" target="_blank" rel="noopener">
                        <span class="swal-contact__icon">${githubIcon}</span>
                        <span class="swal-contact__text"><strong>GitHub</strong><small>${c.githubLabel}</small></span>
                    </a>
                    <a class="swal-contact__row" href="${c.linkedin}" target="_blank" rel="noopener">
                        <span class="swal-contact__icon">${linkedinIcon}</span>
                        <span class="swal-contact__text"><strong>LinkedIn</strong><small>${c.linkedinLabel}</small></span>
                    </a>
                    <a class="swal-contact__row" href="mailto:${c.email}">
                        <span class="swal-contact__icon"><span class="material-icons">email</span></span>
                        <span class="swal-contact__text"><strong>Correo</strong><small>${c.email}</small></span>
                    </a>
                    <a class="swal-contact__row" href="tel:${c.phone.replace(/\s/g, '')}">
                        <span class="swal-contact__icon"><span class="material-icons">phone</span></span>
                        <span class="swal-contact__text"><strong>Teléfono</strong><small>${c.phone}</small></span>
                    </a>
                </div>
            `,
            showConfirmButton: false,
            showCloseButton: true,
        });
    }
}
