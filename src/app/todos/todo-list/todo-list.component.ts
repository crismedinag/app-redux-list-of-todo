import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo.model';
import { AppState } from '../../appState.reducer';
import { Store } from '@ngrx/store';
import { validfilters } from '../../filter/filter.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: Todo[] = [];
  actualFilter: validfilters;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.subscribe(({todos, filter}) =>{
      this.todos = todos;
      this.actualFilter = filter;
    })
  }

}
