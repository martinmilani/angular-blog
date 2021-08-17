import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Todo } from '../../todo';
import { TodosService } from '../../services/todos.service';
import { LoaderService } from 'src/app/services/loader.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];
  pageOfItems: Array<any> = [];
  page_number: number = 1;
  page_size: number = 10;
  select_value = '';
  selectTaskState_value = '';

  constructor(
    private todosService: TodosService,
    private route: ActivatedRoute,
    private location: Location,
    public loaderService: LoaderService
  ) {}

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.todosService.getTodos(id).subscribe((todos) => (this.todos = todos));
  }

  handlePage(e: PageEvent) {
    this.page_size = e.pageSize;
    this.page_number = e.pageIndex + 1;
  }

  onCompleteToggle(todo: Todo) {
    console.log(todo);
    let itemIndex = this.todos.findIndex((item) => item.id == todo.id);
    this.todos[itemIndex].completed = !this.todos[itemIndex].completed;
    console.log(this.todos[itemIndex]);
  }

  handleSelect(value: string) {
    console.log(value);
    this.select_value = value;
  }

  handleSelectTaskState(value: string) {
    console.log(value);
    this.selectTaskState_value = value;
  }

  completed = new FormControl(false);
}
