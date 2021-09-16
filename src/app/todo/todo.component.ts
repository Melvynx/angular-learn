import { Component } from '@angular/core';
import { getLocalStorage, setLocalStorage } from '../../utils/localStorage';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent {
  title = 'first-angular-app';
  todos: { id: number; text: string; check: boolean }[] = getLocalStorage(
    'todos',
    []
  );
  todoInput = '';

  addTodo() {
    if (this.todoInput.length === 0) return;

    const id = this.todos.length ? this.todos[this.todos.length - 1].id + 1 : 1;
    this.todos.push({ id, text: this.todoInput, check: false });

    this.todoInput = '';
    this.update();
  }

  checkTodo(id: number, check: boolean) {
    const index = this.todos.findIndex((todo) => todo.id === id);
    if (index === -1) return;

    this.todos[index].check = check;
    this.update();
  }

  deleteTodo(id: number) {
    const index = this.todos.findIndex((todo) => todo.id === id);
    if (index === -1) return;

    this.todos.splice(index, 1);
    this.update();
  }

  private update() {
    setLocalStorage('todos', this.todos);
  }
}
