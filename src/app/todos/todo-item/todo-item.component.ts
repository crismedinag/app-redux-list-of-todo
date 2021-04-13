import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Todo } from '../models/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../appState.reducer';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  @ViewChild('inputLocal') txtInputLocal: ElementRef;

  public checkCompleted: FormControl;
  public textInput: FormControl;
  public editing: boolean = false;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.checkCompleted = new FormControl(this.todo.check);
    this.textInput = new FormControl(this.todo.text, Validators.required);
    this.checkCompleted.valueChanges.subscribe(valor => {
      this.store.dispatch(actions.toggleCompleted({id: this.todo.id}));
    });
  }

  edit(){
    this.editing = true;
    this.textInput.setValue(this.todo.text);
    setTimeout(() => {
      this.txtInputLocal.nativeElement.select();
    }, 1);
  }

  finishEdition(){
    this.editing = false;
    if(this.textInput.invalid) {return ;}
    if(this.textInput.value === this.todo.text ) {return ;}
    this.store.dispatch(actions.edit({id: this.todo.id, text: this.textInput.value}));
  }

  delete(){
    this.store.dispatch(actions.deleteTodo({id: this.todo.id}))
  }
}
