import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { TmdbService } from '@shared/services/tmdb.service';
import { DiscoverMovieRequest } from '@movies/models/discover-movie-request.model';
import { Provider } from '@app/_shared/models/provider.model';
import { ResultsResponse } from '@app/_shared/models/results-response';
import { PaginatedResponse } from '@app/_shared/models/paginated-response';
import { Movie } from '@movies/models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(
    private http: HttpClient,
    private tmdb: TmdbService,
  ) { }
  
  getMovies(page: number = 1): Observable<PaginatedResponse<Movie>> {
    let request = new DiscoverMovieRequest();
    request.page = page;
    return this.http.get<PaginatedResponse<Movie>>(this.tmdb.getDiscoverMovies(request))
    .pipe(
      catchError(this.handleError)
    );
  }

  getMovieProviders(): Observable<ResultsResponse<Provider>> {
    return this.http.get<ResultsResponse<Provider>>(this.tmdb.getMovieProviders())
    .pipe(
      catchError(this.handleError),
    );
  }

  private handleError(res: HttpErrorResponse) {
    console.error(res.error);
    return throwError(res.error || 'Server error');
  }
}

