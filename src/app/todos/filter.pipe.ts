import { Pipe, PipeTransform } from '@angular/core';
import { validfilters } from '../filter/filter.actions';
import { Todo } from './models/todo.model';

@Pipe({
  name: 'filterTodo'
})
export class FilterPipe implements PipeTransform {

  transform(todos: Todo[], filter: validfilters): Todo[] {
    switch(filter){
      case 'Completados': return todos.filter( todo => todo.check);
      case 'Pendientes': return todos.filter (todo => !todo.check);
      default: return todos;
    }
  }

}
