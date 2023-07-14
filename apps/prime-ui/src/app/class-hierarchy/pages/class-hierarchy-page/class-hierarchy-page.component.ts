import { Component, inject, OnInit, Signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { classHierarchyActions, classHierarchyFeature, selectLevelsWithParameters } from '../../data';
import { ClassificationLevel } from '../../interfaces/classification-level.interface';
import { ClassificationScheme } from '../../interfaces/classsification-scheme.interface';

@Component({
  selector: 'lseg-class-hierarchy-page',
  template: `
    <h1>Class Hierarchy</h1>
    <hr />
    <lseg-schemes [schemes]="schemes" (scheme)="onSchemeChange($event)" />
    <hr />
    <lseg-levels [levels]="levels" />
  `,
  styles: [],
})
export class ClassHierarchyPageComponent implements OnInit {
  private store = inject(Store);
  // private classHierarchyService = inject(ClassHierarchyService);

  // SCHEMES
  // -------
  schemes: Signal<ClassificationScheme[]> = this.store.selectSignal(classHierarchyFeature.selectSchemes);
  // schemes: Signal<ClassificationScheme[]> = this.store.selectSignal(selectFilteredSchemes);

  // LEVELS
  // ------
  levels: Signal<ClassificationLevel[]> = this.store.selectSignal(classHierarchyFeature.selectLevels);

  // levels: Signal<ClassificationLevel[]> = this.store.selectSignal(selectLevelsWithParameters('DAR'));

  ngOnInit(): void {
    // this.classHierarchyService.getClassificationSchemes().subscribe({
    //   next: (schemes) => {
    //     this.store.dispatch(classHierarchyActions.schemesLoaded({schemes}));
    //   }
    // });

    this.store.dispatch(classHierarchyActions.loadSchemes());
    this.store.dispatch(classHierarchyActions.loadLevels());
  }

  updateScheme() {
    const scheme = {
      ...this.schemes()[0],
      name: 'Testing Update',
    };
    this.store.dispatch(classHierarchyActions.updateScheme({ scheme }));
  }

  updateLevel() {
    const level = {
      ...this.levels()[0],
      name: 'Testing Update',
    };
    this.store.dispatch(classHierarchyActions.updateLevel({ level }));
  }

  onSchemeChange(scheme: string) {
    this.levels = this.store.selectSignal(selectLevelsWithParameters(scheme));
  }
}
