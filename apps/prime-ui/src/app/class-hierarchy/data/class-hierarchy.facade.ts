import { computed, inject, Injectable, signal } from '@angular/core';
import { ClassificationLevel } from '../interfaces/classification-level.interface';
import { ClassificationScheme } from '../interfaces/classsification-scheme.interface';
import { ClassHierarchyService } from '../services/class-hierarchy.service';

@Injectable()
export class ClassHierarchyBasicFacade {
  private classHierarchyService = inject(ClassHierarchyService);

  private state = signal({
    schemes: [] as ClassificationScheme[],
    levels: [] as ClassificationLevel[],
  });

  // schemes: Signal<ClassificationScheme[]>;
  readonly schemes = computed(() => this.state().schemes);
  readonly levels = computed(() => this.state().levels);

  async loadSchemes(): Promise<void> {
    const schemes = await this.classHierarchyService.getClassificationSchemesPromise();
    this.state.update(state => ({
      ...state,
      schemes,
    }));
  }

  async loadLevels(): Promise<void> {
    const levels = await this.classHierarchyService.getClassificationLevelsPromise();
    this.state.update(state => ({
      ...state,
      levels,
    }));
  }
}
