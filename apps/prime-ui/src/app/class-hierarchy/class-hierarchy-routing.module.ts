import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';
import { ClassHierarchyEffects, classHierarchyFeature } from './data';
import { ClassHierarchyPageComponent } from './pages/class-hierarchy-page/class-hierarchy-page.component';

const routes: Routes = [
  {
    path: '',
    component: ClassHierarchyPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [provideState(classHierarchyFeature), provideEffects(ClassHierarchyEffects)],
})
export class ClassHierarchyRoutingModule {}
