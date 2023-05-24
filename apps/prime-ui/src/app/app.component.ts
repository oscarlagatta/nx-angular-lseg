import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutModule } from '@lseg/layout';

@Component({
  standalone: true,
  imports: [RouterModule, LayoutModule],
  selector: 'lseg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'prime-ui';
}
