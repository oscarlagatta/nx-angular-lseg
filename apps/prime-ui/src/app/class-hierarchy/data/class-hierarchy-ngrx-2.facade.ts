import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { ClassHierarchyService } from '../services/class-hierarchy.service';
import { classHierarchyActions } from './+state/actions';
import { classHierarchyFeature } from './+state/reducer';

// stage 2
@Injectable()
export class ClassHierarchyBasicFacade {
  private store = inject(Store);
  private classHierarchyService = inject(ClassHierarchyService);

  // schemes: Signal<ClassificationScheme[]>;
  readonly schemes = this.store.selectSignal(classHierarchyFeature.selectSchemes);

  async loadSchemes(): Promise<void> {
    const schemes = await this.classHierarchyService.getClassificationSchemesPromise();
    this.store.dispatch(classHierarchyActions.schemesLoaded({ schemes }));
  }

  async loadLevels(): Promise<void> {
    const levels = await this.classHierarchyService.getClassificationLevelsPromise();
    this.store.dispatch(classHierarchyActions.levelsLoaded({ levels }));
  }
}
