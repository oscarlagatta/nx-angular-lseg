import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { ClassificationLevel } from '../../interfaces/classification-level.interface';
import { ClassificationScheme } from '../../interfaces/classsification-scheme.interface';

export const classHierarchyActions = createActionGroup({
  source: 'classificationHierarchy',
  events: {
    'load schemes': emptyProps(),
    'schemes loaded': props<{ schemes: ClassificationScheme[] }>(),
    'update scheme': props<{ scheme: ClassificationScheme }>(),
    'clear schemes': emptyProps(),
    'load levels': emptyProps(),
    'levels loaded': props<{ levels: ClassificationLevel[] }>(),
    'update level': props<{ level: ClassificationLevel }>(),
    'clear levels': emptyProps(),
  },
});
