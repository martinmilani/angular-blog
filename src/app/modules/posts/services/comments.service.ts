import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Comment } from '../comments';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CommentsService {
  private commentsUrl = 'https://jsonplaceholder.typicode.com/posts/';

  constructor(private http: HttpClient) {}

  getComments(id: number): Observable<Comment[]> {
    return this.http
      .get<Comment[]>(`${this.commentsUrl}${id}/comments`)
      .pipe(catchError(this.handleError<Comment[]>('getComments', [])));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      alert(error.statusText);
      return of(result as T);
    };
  }
}
