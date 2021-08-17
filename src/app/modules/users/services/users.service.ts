import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private usersUrl = 'https://jsonplaceholder.typicode.com/users/';

  constructor(private http: HttpClient) {}

  getUsers(id: number): Observable<User[]> {
    let usersUrlWithId = `${id === 0 ? this.usersUrl : this.usersUrl + id}`;
    return this.http
      .get<User[]>(usersUrlWithId)
      .pipe(catchError(this.handleError<User[]>('getUsers', [])));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      alert(error.statusText);
      return of(result as T);
    };
  }
}
