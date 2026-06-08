import { Component } from '@angular/core';
import { Hero } from "../../pages/hero/hero";

@Component({
    selector: 'app-main-content',
    imports: [Hero],
    templateUrl: './main-content.html',
    styleUrl: './main-content.scss',
    host: {
        class: '!w-full min-h-dvh',
    },
})
export class MainContent {}
