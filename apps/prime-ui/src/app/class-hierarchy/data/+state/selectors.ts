import { createSelector } from '@ngrx/store';
import { classHierarchyFeature } from './reducer';

export const selectFilteredSchemes = createSelector(classHierarchyFeature.selectSchemes, schemes =>
  schemes.filter(s => s.scheme === 'DAR'),
);

export const selectFilteredLevels = createSelector(classHierarchyFeature.selectLevels, levels =>
  levels.filter(l => l.scheme === 'DAR'),
);

// parameterized selector
export function selectLevelsWithParameters(schemeId: string) {
  return createSelector(classHierarchyFeature.selectLevels, levels => levels.filter(l => l.scheme === schemeId));
}
