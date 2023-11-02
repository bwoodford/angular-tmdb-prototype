import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TmdbLinkService } from '@shared/services/tmdb-link.service';
import { Country } from '@shared/models/country.interface';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TmdbService {

  constructor(
    private http: HttpClient,
    private tmdbLinks: TmdbLinkService
  ) { }

  getCountries(): Observable<Array<Country>> {
    return this.http.get<Array<Country>>(this.tmdbLinks.getCountries())
    .pipe(
      catchError(this.handleError)
    );
  }

  private handleError(res: HttpErrorResponse) {
    console.error(res.error);
    return throwError(res.error || 'Server error');
  }
}
