import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lseg-footer',
  standalone: true,
  imports: [CommonModule],
  template: ` <footer><ng-content></ng-content></footer> `,
  styleUrls: ['footer.component.scss'],
})
export class FooterComponent {}
