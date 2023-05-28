import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lseg-entity-feature-search',
  standalone: true,
  imports: [CommonModule],
  template: `<p>entity-feature-search works!</p>`,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
})
export class EntityFeatureSearchComponent {}
