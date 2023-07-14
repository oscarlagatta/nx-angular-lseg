import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassHierarchyRoutingModule } from './class-hierarchy-routing.module';
import { LevelsComponent } from './components/levels/levels.component';
import { SchemesComponent } from './components/schemes/schemes.component';
import { ClassHierarchyPageComponent } from './pages/class-hierarchy-page/class-hierarchy-page.component';
import { ClassHierarchyService } from './services/class-hierarchy.service';

@NgModule({
  declarations: [ClassHierarchyPageComponent, SchemesComponent, LevelsComponent],
  imports: [CommonModule, ClassHierarchyRoutingModule],
  providers: [ClassHierarchyService],
  exports: [ClassHierarchyPageComponent],
})
export class ClassHierarchyModule {}
