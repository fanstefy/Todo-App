import { Component, OnInit } from '@angular/core';
import { Todo } from './../../models/Todo';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos:Todo[] = [];
  inputTodo:string = "";

  constructor() { }

  ngOnInit(): void {
    this.todos = [
      {
        content: 'First Todo',
        completed: false
      },
      {
        content: 'Second Todo',
        completed: false
      }
    ];
  }

  toddleTodo(id:number) {
    this.todos.map((item, i) => {
      if (id == i) {
        item.completed = !item.completed;
      }
      return item;
    });
  }

  deleteTodo(id:number) {
    // this.todos = this.todos.filter(function (item, i) {
    //   return i != id;
    // });
    // this.todos = this.todos.filter((item, i) => {
    //   return i != id;
    // });
    this.todos = this.todos.filter((item, i) => i != id);
  }

  addTodo() {
    this.todos.push({
      content: this.inputTodo,
      completed: false
    });
    this.inputTodo = "";
  }

}
