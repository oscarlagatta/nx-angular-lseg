import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lseg-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer>
      <span>London Stock Exchange</span>
    </footer>
  `,
  styles: [],
})
export class FooterComponent {}
