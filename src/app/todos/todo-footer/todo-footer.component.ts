import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/appState.reducer';
import * as actions from '../../filter/filter.actions';
import { cleanTodo } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  actualFilter: actions.validfilters = 'Todos';
  filters: actions.validfilters[] = ['Todos', 'Completados', 'Pendientes'];

  pending: number = 0;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.subscribe( state => {
      this.actualFilter = state.filter;
      this.pending = state.todos.filter( todo => !todo.check).length;
    })
  }

  changeFilter(filter: actions.validfilters){
    this.store.dispatch(actions.setFilter({filter: filter}));
  }

  cleanChecked(){
    this.store.dispatch(cleanTodo());
  }

}
