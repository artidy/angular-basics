import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Todo, TodosService } from './services/todos.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  todos: Todo[] = []
  todoTitle = ''
  loading = false
  error = ''

  constructor(private todoService: TodosService) {}

  ngOnInit() {
    this.fetchTodos()
  }

  addTodo() {
    if (this.todoTitle.trim()) {
      const newTodo: Todo = {
        title: this.todoTitle,
        completed: false
      }  
      this.todoService.addTodo(newTodo)
        .subscribe(
          todo => {
            this.todos.unshift(todo)
            this.todoTitle = ''
          },
          error => this.error = `Ошибка: ${error.message}`
        )
    }
  }

  fetchTodos() {
    this.loading = true
      this.todoService.getTodos()
      .subscribe(
        todos => {
          this.todos = todos
          this.loading = false
        },
        error => this.error = `Ошибка: ${error.message}`
      )
  }

  removeTodo(id: number) {
    this.todoService.removeTodo(id)
      .subscribe(
        () => {
          this.todos = this.todos.filter(item => item.id !== id)
        },
        error => this.error = `Ошибка: ${error.message}`
      )
  }

  completeTodo(id: number) {
    this.todoService.completeTodo(id)
      .subscribe(
        todo => {
          this.todos.find(item => item.id === todo.id).completed = true
        },
        error => this.error = `Ошибка: ${error.message}`
      )  
  }
}
