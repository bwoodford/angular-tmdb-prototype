import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { TmdbService } from '@shared/services/tmdb.service';
import { DiscoverMovieResponse } from '@movies/models/discover-movie-response.model';
import { DiscoverMovieRequest } from '@movies/models/discover-movie-request.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(
    private http: HttpClient,
    private tmdb: TmdbService
  ) { }
  
  getMovies(page: number = 1): Observable<DiscoverMovieResponse> {
    let request = new DiscoverMovieRequest();
    request.page = page;
    return this.http.get<any>(this.tmdb.getDiscoverMovies(request))
    .pipe(
      catchError(this.handleError)
    );
  }

  private handleError(res: HttpErrorResponse) {
    console.error(res.error);
    return throwError(res.error || 'Server error');
  }
}

