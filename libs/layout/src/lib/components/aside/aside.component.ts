import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lseg-aside',
  standalone: true,
  imports: [CommonModule],
  template: `
    <aside>
      <p>Sidebar</p>
    </aside>
  `,
  styles: [],
})
export class AsideComponent {}
