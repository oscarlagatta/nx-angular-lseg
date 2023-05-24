import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'lseg-nav',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <nav>
      <ul>
        <li><a routerLink="/home">Home</a></li>
      </ul>
    </nav>
  `,
  styles: [],
})
export class NavComponent {}
