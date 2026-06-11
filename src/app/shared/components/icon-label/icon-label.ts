import { Component, input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-icon-label',
  imports: [MatIcon],
  templateUrl: './icon-label.html',
  styleUrl: './icon-label.scss',
})
export class IconLabel {
  readonly text = input.required<string>();
  readonly icon = input('code');
  readonly styleClass = input('');
}
