import { createAction, props } from '@ngrx/store';

export type validfilters = 'Todos' | 'Completados' | 'Pendientes'

export const setFilter = createAction(
  '[Filter] Set Filter',
  props<{filter: validfilters}>()
);
