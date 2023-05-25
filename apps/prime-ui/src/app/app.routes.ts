import { Route } from '@angular/router';
import { MainComponent } from '@lseg/layout';

export const appRoutes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: MainComponent },
];
