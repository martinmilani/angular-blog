import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './components/posts/posts.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { PipesModule } from '../pipes/pipes.module';
import { SearchComponent } from './components/search/search.component';
import { CommentsComponent } from './components/comments/comments.component';

import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [PostsComponent, SearchComponent, CommentsComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    MaterialModule,
    PipesModule,
  ],
  exports: [PostsComponent],
})
export class PostsModule {}
