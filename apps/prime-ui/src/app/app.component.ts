import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from '@lseg/layout';

@Component({
  standalone: true,
  imports: [RouterModule, LayoutComponent],
  selector: 'lseg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'prime-ui';
}
