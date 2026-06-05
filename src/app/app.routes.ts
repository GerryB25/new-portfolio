import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/hero/hero').then(m => m.Hero)
    },
    {
        path: 'projects',
        loadComponent: () => import('./pages/projects/projects').then(m => m.Projects)
    },
    {
        path: 'experience',
        loadComponent: () => import('./pages/experience/experience').then(m => m.Experience)
    },
    {
        path: 'skills',
        loadComponent: () => import('./pages/skills/skills').then(m => m.Skills)
    },
    {
        path: 'contact', loadComponent: () => import('./pages/contact/contact').then(m => m.Contact)
    },
    {
        path: '**',
        loadComponent: () => import('./pages/not-found/not-found').then(m => m.NotFound)
    },
];
