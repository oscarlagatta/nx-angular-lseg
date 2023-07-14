import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';
import { ClassHierarchyService } from '../../services/class-hierarchy.service';
import { classHierarchyActions } from './actions';

@Injectable({
  providedIn: 'root',
})
export class ClassHierarchyEffects {
  classHierarchyService = inject(ClassHierarchyService);
  actions$ = inject(Actions);

  loadSchemes = createEffect(() =>
    this.actions$.pipe(
      ofType(classHierarchyActions.loadSchemes),
      switchMap(() => this.classHierarchyService.getClassificationSchemes()),
      map(schemes => classHierarchyActions.schemesLoaded({ schemes })),
    ),
  );

  updateScheme = createEffect(() =>
    this.actions$.pipe(
      ofType(classHierarchyActions.updateScheme),
      switchMap(classificationScheme =>
        this.classHierarchyService.updateClassificationScheme(classificationScheme.scheme),
      ),
      map(classificationScheme => classHierarchyActions.updateScheme({ scheme: classificationScheme })),
    ),
  );

  loadLevels = createEffect(() =>
    this.actions$.pipe(
      ofType(classHierarchyActions.loadLevels),
      switchMap(() => this.classHierarchyService.getClassificationLevels()),
      map(levels => classHierarchyActions.levelsLoaded({ levels })),
    ),
  );
}
