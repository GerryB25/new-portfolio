import { Component } from '@angular/core';
import { MatIcon } from "@angular/material/icon";
import { MatTooltip } from "@angular/material/tooltip";

@Component({
    selector: 'app-hero',
    imports: [MatIcon, MatTooltip],
    templateUrl: './hero.html',
    styleUrl: './hero.scss',
})
export class Hero {}
