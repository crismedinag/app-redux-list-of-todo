import { createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import { create, edit, toggleCompleted, deleteTodo, toggleAll, cleanTodo } from './todo.actions';

export const initialState: Todo[] = [
  new Todo('Salir a pasear'),
  new Todo('Ordenar proyecto'),
  new Todo('Comprar café'),
];

const _todoReducer = createReducer(
  initialState,
  on(create, (state, {text}) => [...state, new Todo (text)]),

  on(toggleCompleted, (state, {id}) => {
    return state.map(todo => {
      if( todo.id === id) {
        return {
          ...todo,
          check: !todo.check
        }
      } else {
        return todo;
      }
    });
  }),

  on(edit, (state, {id, text}) => {
    return state.map(todo => {
      if( todo.id === id) {
        return {
          ...todo,
          text: text
        }
      } else {
        return todo;
      }
    });
  }),

  on(deleteTodo, (state, {id}) => state.filter( todo => todo.id !== id)),

  on(toggleAll, (state, {check}) => state.map( todo => {
    return {
      ...todo,
      check: check
    }
  })),

  on(cleanTodo, state => state.filter(todo => !todo.check)),

);

export function todoReducer(state, action) {
  return _todoReducer(state, action);
}
