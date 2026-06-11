import { Component } from '@angular/core';
import { Hero } from "../../pages/hero/hero";
import { About } from "../../pages/about/about";
import { Experience } from "../../pages/experience/experience";
import { Projects } from "../../pages/projects/projects";

@Component({
    selector: 'app-main-content',
    imports: [Hero, About, Experience, Projects],
    templateUrl: './main-content.html',
    styleUrl: './main-content.scss',
    host: {
        class: '!w-full min-h-dvh',
    },
})
export class MainContent {}
