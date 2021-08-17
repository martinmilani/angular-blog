import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Photo } from '../photo';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class GalleryService {
  private photosUrl = 'https://jsonplaceholder.typicode.com/albums/';

  constructor(private http: HttpClient) {}

  getPhotos(id: number): Observable<Photo[]> {
    let url = `${this.photosUrl + id + '/photos'}`;
    return this.http
      .get<Photo[]>(url)
      .pipe(catchError(this.handleError<Photo[]>('getPhotos', [])));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      alert(error.statusText);
      return of(result as T);
    };
  }

  deletePhoto(id: number): Observable<Photo> {
    const url = `${this.photosUrl}/${id}`;
    console.log(`Photo ID: ${id} - Deleted`);
    return this.http.delete<Photo>(url);
  }
}
