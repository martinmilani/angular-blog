import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Post } from '../post';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private postsUrl = 'https://jsonplaceholder.typicode.com/posts';
  private usersUrl = 'https://jsonplaceholder.typicode.com/users/';

  constructor(private http: HttpClient) {}

  getPosts(id: number): Observable<Post[]> {
    let url = `${id === 0 ? this.postsUrl : this.usersUrl + id + '/posts'}`;
    return this.http
      .get<Post[]>(url)
      .pipe(catchError(this.handleError<Post[]>('getPosts', [])));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      alert(error.statusText);
      return of(result as T);
    };
  }
}
