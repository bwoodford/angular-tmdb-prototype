import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { DiscoverMovieRequest } from '@movies/models/discover-movie-request.model';
import { SortResultsBy } from '@movies/models/sort-results-by';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  private filterSubject = new BehaviorSubject<DiscoverMovieRequest>(new DiscoverMovieRequest());
  private hasChangedSubject = new BehaviorSubject<boolean>(false);

  private filterChanges = new DiscoverMovieRequest();

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

  submitFilter() {
    this.filterSubject.next(this.filterChanges);
    this.filterChanges = new DiscoverMovieRequest();
  }

  private notifyHasChanged() {
    this.hasChangedSubject.next(true);
  }

}