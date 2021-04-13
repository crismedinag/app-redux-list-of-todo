import { createReducer, on } from '@ngrx/store';
import { setFilter, validfilters } from './filter.actions';


export const initialState: validfilters = 'Todos';

const _filterReducer = createReducer(
  initialState,
  on(setFilter, (state, {filter}) => filter),
);

export function filterReducer(state, action) {
  return _filterReducer(state, action);
}
