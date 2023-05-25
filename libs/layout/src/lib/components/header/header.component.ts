import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lseg-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header>
      <ul class="nav">
        <li class="nav__item"><a href="" class="nav__link">New Search</a></li>
        <li class="nav__item"><a href="" class="nav__link">New Entity</a></li>
        <li class="nav__item"><a href="" class="nav__link">Static</a></li>
        <li class="nav__item"><a href="" class="nav__link">Workflow</a></li>
        <li class="nav__item"><a href="" class="nav__link">Index</a></li>
        <li class="nav__item"><a href="" class="nav__link">Process</a></li>
        <li class="nav__item"><a href="" class="nav__link">Reports</a></li>
        <li class="nav__item"><a href="" class="nav__link">FF Bulk</a></li>
      </ul>
    </header>
  `,
  styles: [],
})
export class HeaderComponent {}
