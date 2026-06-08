import { Component } from '@angular/core';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { MainContent } from "./main-content/main-content";

@Component({
    selector: 'app-layout',
    imports: [Header, Footer, MainContent],
    templateUrl: './layout.html',
    host: {
        class: '!w-full h-dvh',
    },
})
export class LayoutComponent {}
