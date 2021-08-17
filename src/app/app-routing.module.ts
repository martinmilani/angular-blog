import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './modules/posts/components/posts/posts.component';
import { CommentsComponent } from './modules/posts/components/comments/comments.component';
import { UsersComponent } from './modules/users/components/users/users.component';
import { AlbumsComponent } from './modules/albums/components/albums/albums.component';
import { TodosComponent } from './modules/todos/components/todos/todos.component';
import { GalleryComponent } from './modules/albums/components/gallery/gallery.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'posts/:id', component: PostsComponent },
  { path: 'comments/:id', component: CommentsComponent },
  { path: 'users/:id', component: UsersComponent },
  { path: 'albums/:id', component: AlbumsComponent },
  { path: 'todos/:id', component: TodosComponent },
  { path: 'gallery/:id', component: GalleryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
