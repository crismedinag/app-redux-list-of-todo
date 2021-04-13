import { createAction, props } from '@ngrx/store';

export const create = createAction(
  '[TODO] create TODO',
  props<{text: string}>()
);

export const toggleCompleted = createAction(
  '[TODO] Toggle TODO',
  props<{id: number}>()
);

export const edit = createAction(
  '[TODO] edit TODO',
  props<{id: number, text: string}>()
);

export const deleteTodo = createAction(
  '[TODO] delete TODO',
  props<{id: number}>()
);

export const toggleAll = createAction(
  '[TODO] ToggleAll TODO',
  props<{check: boolean}>()
);

export const cleanTodo = createAction(
  '[TODO] clean TODO'
);
