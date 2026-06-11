import { Component } from '@angular/core';
import { IconLabel } from '../../shared/components/icon-label/icon-label';

interface JobExperience {
  role: string;
  company: string;
  period: string;
  current: boolean;
  description: string;
  achievements: string[];
}

@Component({
  selector: 'app-experience',
  imports: [IconLabel],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience {
  readonly experiences: JobExperience[] = [
    {
      role: 'Desarrollador Mobile & Frontend',
      company: 'Secretaría de Bienestar del Estado de Tabasco',
      period: 'Ago 2024 — Presente',
      current: true,
      description:
        'Reclutado externamente para arrancar proyectos web y mobile desde cero, sin documentación previa, en un equipo de 2–5 desarrolladores.',
      achievements: [
        'Desarrollé end-to-end el frontend Angular de Reforestando Tabasco 2025: +2M solicitudes y ~10k usuarios diarios en pico, sin degradación de UX.',
        'Implementé pantallas en producción de Llave Tabasco (Flutter), app móvil pública de cobertura regional para trámites digitales.',
        'Diseñé un sistema integrado (5 frontends Angular, 1 portal administrativo y 3 apps Flutter) usado semanalmente por 1k–3k operadores.',
        'Automaticé un módulo de validación que reemplazó un flujo manual en Excel: de varios días a minutos por carga (+50k registros).',
      ],
    },
    {
      role: 'Frontend Developer (Angular)',
      company: 'Núcleo Soluciones Informáticas',
      period: 'Feb 2023 — Ago 2024',
      current: false,
      description:
        'Primer rol profesional. Proyectos productivos B2B para mantenimiento, refactor y desarrollo incremental de funcionalidades.',
      achievements: [
        'Mantuve y refactoricé módulos Angular en aplicaciones empresariales en producción, absorbiendo codebases sin documentación formal.',
        'Migré componentes legacy a patrones reactivos con RxJS y arquitectura basada en componentes, reduciendo deuda técnica.',
        'Colaboré con squads multidisciplinarios (PM, UX, backend) en ciclos iterativos para clientes B2B.',
        'Participé en code reviews y propuestas de arquitectura con el equipo de desarrollo.',
      ],
    },
  ];
}
