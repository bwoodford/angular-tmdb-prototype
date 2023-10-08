import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { TmdbLinkService } from '@shared/services/tmdb-link.service';
import { DiscoverMovieRequest } from '@movies/models/discover-movie-request.model';
import { Provider } from '@app/_shared/models/provider.interface';
import { ResultsResponse } from '@app/_shared/models/results-response.interface';
import { PaginatedResponse } from '@app/_shared/models/paginated-response.interface';
import { Movie } from '@movies/models/movie.model';
import { Country } from '@app/_shared/models/country.interface';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(
    private http: HttpClient,
    private tmdbLinks: TmdbLinkService,
  ) {
  } 
  
  getMovies(request: DiscoverMovieRequest): Observable<PaginatedResponse<Movie>> {
    return this.http.get<PaginatedResponse<Movie>>(this.tmdbLinks.getDiscoverMovies(request))
    .pipe(
      catchError(this.handleError)
    );
  }

  getProviders(country?: Country): Observable<Array<Provider>> {
    return this.http.get<ResultsResponse<Provider>>(this.tmdbLinks.getMovieProviders(undefined, country?.iso_3166_1))
    .pipe(
      catchError(this.handleError),
      map(p => p.results)
    );
  }
 
  private handleError(res: HttpErrorResponse) {
    console.error(res.error);
    return throwError(res.error || 'Server error');
  }
}

