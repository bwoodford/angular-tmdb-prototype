import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { DiscoverMovieRequest } from '@movies/models/discover-movie-request.model';
import { SortResultsBy } from '@movies/models/sort-results-by';
import { DateType } from '@app/_shared/models/date-type.enum';
import * as moment from 'moment';
import { BaseType } from '@app/_shared/models/base-type.interface';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  private filterSubject = new BehaviorSubject<DiscoverMovieRequest>(new DiscoverMovieRequest());
  private hasChangedSubject = new BehaviorSubject<boolean>(false);

  private filterChanges = new DiscoverMovieRequest();

  private readonly OR = "|";
  private readonly AND = "&";

  getFilter(): Observable<DiscoverMovieRequest> {
    return this.filterSubject.asObservable();
  }

  hasChanges(): Observable<boolean> {
    return this.hasChangedSubject.asObservable();
  }

  setSortByPopularity(sort: SortResultsBy) {
    this.filterChanges.sort_by = sort;
    this.notifyHasChanged();
  }

  setProviders(providers: Array<string>) {
    this.filterChanges.with_watch_providers = providers.join(this.OR);
    this.notifyHasChanged();
  }

  setReleaseDates(dates: [Date?, Date?]) {
    if (dates[DateType.From]) {
      this.filterChanges.release_date_gte = moment(dates[DateType.From]).format("YYYY-MM-DD");
    }

    if (dates[DateType.To]) {
      this.filterChanges.release_date_lte = moment(dates[DateType.To]).format("YYYY-MM-DD");
    }

    this.notifyHasChanged();
  }

  setGenres(genres: Array<BaseType>) {
    this.filterChanges.with_genres = genres.map(g => g.id).join(",");
    this.notifyHasChanged();
  }

  submitFilter() {
    this.filterSubject.next(this.filterChanges);
    this.filterChanges = new DiscoverMovieRequest();
  }

  private notifyHasChanged() {
    this.hasChangedSubject.next(true);
  }
}