import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './components/todos/todos.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { PipesModule } from '../pipes/pipes.module';

import { MaterialModule } from '../material/material.module';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [TodosComponent, SearchComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    MaterialModule,
    PipesModule,
    FormsModule,
  ],
})
export class TodosModule {}
