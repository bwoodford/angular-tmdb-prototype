import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { TmdbService } from '@shared/tmdb/tmdb.service';
import { PopularMovies } from './popular-movies.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(
    private http: HttpClient,
    private tmdb: TmdbService
  ) { }
  
  getPopularMovies(page: number = 1): Observable<PopularMovies> {
    return this.http.get<any>(this.tmdb.getPopularMovies(page))
    .pipe(
      catchError(this.handleError)
    );
  }

  private handleError(res: HttpErrorResponse) {
    console.error(res.error);
    return throwError(res.error || 'Server error');
  }
}

