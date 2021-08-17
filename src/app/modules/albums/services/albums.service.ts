import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Album } from '../album';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AlbumsService {
  private albumsUrl = 'https://jsonplaceholder.typicode.com/albums/';
  private usersUrl = 'https://jsonplaceholder.typicode.com/users/';

  constructor(private http: HttpClient) {}

  getAlbums(id: number): Observable<Album[]> {
    let url = `${id === 0 ? this.albumsUrl : this.usersUrl + id + '/albums'}`;
    return this.http
      .get<Album[]>(url)
      .pipe(catchError(this.handleError<Album[]>('getAlbums', [])));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      alert(error.statusText);
      return of(result as T);
    };
  }
}
