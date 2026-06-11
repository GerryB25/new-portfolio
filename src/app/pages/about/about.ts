import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { IconLabel } from "../../shared/components/icon-label/icon-label";

interface Stat {
  icon: string;
  value: string;
  label: string;
}

interface Skill {
  icon: string;
  iconClass: string;
  title: string;
  techs: string;
}

@Component({
  selector: 'app-about',
  imports: [IconLabel, MatIcon],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  readonly stats: Stat[] = [
    { icon: 'work', value: '+3 años', label: 'de experiencia' },
    { icon: 'school', value: 'Ingenierio', label: 'en sistemas computacionales' },
    { icon: 'public', value: 'Remoto', label: 'disponible' },
  ];

  readonly skills: Skill[] = [
    {
      icon: 'code',
      iconClass: 'bg-red-50 text-red-600',
      title: 'Frontend',
      techs: 'Angular 17+, TypeScript, RxJS, Signals, NgRx, Reactive Forms',
    },
    {
      icon: 'phone_android',
      iconClass: 'bg-blue-50 text-blue-600',
      title: 'Mobile',
      techs: 'Flutter, Dart, Bloc, Riverpod, Provider, Android / iOS',
    },
    {
      icon: 'lock',
      iconClass: 'bg-emerald-50 text-emerald-600',
      title: 'Integraciones & Seguridad',
      techs: 'REST APIs, Firebase, JWT, RBAC, OpenAPI',
    },
    {
      icon: 'terminal',
      iconClass: 'bg-orange-50 text-orange-600',
      title: 'DevOps & Tooling',
      techs: 'Git, GitHub, GitLab, CI/CD, Docker, docker-compose',
    },
    {
      icon: 'architecture',
      iconClass: 'bg-violet-50 text-violet-600',
      title: 'Arquitectura & Calidad',
      techs: 'Clean Architecture, Componentes, State Management, Code Review',
    },
    {
      icon: 'extension',
      iconClass: 'bg-pink-50 text-pink-600',
      title: 'Extras',
      techs: 'Spring Boot, Maps & GeoJSON, Node.js, React, Astro',
    },
  ];
}
