import { Route } from '@angular/router';
// import { MainComponent } from '@lseg/layout';

export const appRoutes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'class-hierarchy' },
  // { path: 'home', component: MainComponent },
  {
    path: 'class-hierarchy',
    loadChildren: () => import('./class-hierarchy/class-hierarchy.module').then(m => m.ClassHierarchyModule),
  },
];
