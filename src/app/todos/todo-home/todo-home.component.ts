import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../appState.reducer';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-home',
  templateUrl: './todo-home.component.html',
  styleUrls: ['./todo-home.component.css']
})
export class TodoHomeComponent implements OnInit {

  completed: boolean = false;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  toggleAll(){
    this.completed = !this.completed;
    this.store.dispatch(actions.toggleAll( {check: this.completed} ));
  }

}
