import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';
import { NavComponent } from '../../components/nav/nav.component';
import { AsideComponent } from '../../components/aside/aside.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'lseg-layout',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    NavComponent,
    AsideComponent,
    FooterComponent,
  ],
  template: `
    <div class="container">
      <lseg-header></lseg-header>

      <lseg-nav></lseg-nav>

      <ng-content></ng-content>

      <lseg-aside></lseg-aside>

      <lseg-footer></lseg-footer>
    </div>
  `,
  styles: [],
})
export class LayoutComponent {}
