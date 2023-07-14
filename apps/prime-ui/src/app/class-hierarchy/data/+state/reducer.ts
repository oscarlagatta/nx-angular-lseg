import { createFeature, createReducer, on } from '@ngrx/store';
import { ClassificationLevel } from '../../interfaces/classification-level.interface';
import { ClassificationScheme } from '../../interfaces/classsification-scheme.interface';
import { classHierarchyActions } from './actions';

export interface ClassHierarchyState {
  schemes: ClassificationScheme[];
  levels: ClassificationLevel[];
}

export const initClassHierarchyState: ClassHierarchyState = {
  schemes: [],
  levels: [],
};

export const classHierarchyFeature = createFeature({
  name: 'classificationHierarchyFeature',
  reducer: createReducer(
    initClassHierarchyState,
    on(classHierarchyActions.schemesLoaded, (state, action) => {
      const schemes = action.schemes;
      return {
        ...state,
        schemes,
      };
    }),
    on(classHierarchyActions.updateScheme, (state, action) => {
      const scheme = action.scheme;
      const schemes = state.schemes.map(s => (s.id == scheme.id ? scheme : s));
      return {
        ...state,
        schemes,
      };
    }),
    on(classHierarchyActions.clearSchemes, state => {
      return {
        ...state,
        schemes: [],
      };
    }),
    on(classHierarchyActions.levelsLoaded, (state, action) => {
      const levels = action.levels;
      return {
        ...state,
        levels,
      };
    }),
    on(classHierarchyActions.updateLevel, (state, action) => {
      const level = action.level;
      const levels = state.levels.map(l => (l.id == level.id ? level : l));
      return {
        ...state,
        levels,
      };
    }),
    on(classHierarchyActions.clearLevels, state => {
      return {
        ...state,
        levels: [],
      };
    }),
  ),
});
