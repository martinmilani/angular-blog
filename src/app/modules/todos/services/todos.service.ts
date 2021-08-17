import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Todo } from '../todo';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  private todosUrl = 'https://jsonplaceholder.typicode.com/todos';
  private usersUrl = 'https://jsonplaceholder.typicode.com/users/';

  constructor(private http: HttpClient) {}

  getTodos(id: number): Observable<Todo[]> {
    let url = `${id === 0 ? this.todosUrl : this.usersUrl + id + '/todos'}`;
    return this.http
      .get<Todo[]>(url)
      .pipe(catchError(this.handleError<Todo[]>('getTodos', [])));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      alert(error.statusText);
      return of(result as T);
    };
  }
}
