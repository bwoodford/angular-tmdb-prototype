import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TmdbLinkService } from '@shared/services/tmdb-link.service';
import { Country } from '@shared/models/country.interface';
import { Observable } from 'rxjs';

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
      //catchError(this.handleError)
    );
  }
}
