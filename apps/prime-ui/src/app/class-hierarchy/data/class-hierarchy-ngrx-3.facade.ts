import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { classHierarchyActions } from './+state/actions';
import { selectFilteredSchemes } from './+state/selectors';

// stage 3
@Injectable()
export class ClassHierarchyBasicFacade {
  private store = inject(Store);

  // Using Selectors
  readonly schemes = this.store.selectSignal(selectFilteredSchemes);

  async loadSchemes(): Promise<void> {
    this.store.dispatch(classHierarchyActions.loadSchemes());
  }

  async loadLevels(): Promise<void> {
    this.store.dispatch(classHierarchyActions.loadLevels());
  }
}
