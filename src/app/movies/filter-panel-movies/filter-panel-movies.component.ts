import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Provider } from '@app/_shared/models/provider.interface';
import { SortResultsBy } from '@movies/models/sort-results-by';
import { MovieService } from '@movies/services/movie.service';
import { FilterService } from '@movies/services/filter.service';
import { Country } from '@app/_shared/models/country.interface';
import { TmdbService } from '@app/_shared/services/tmdb.service';
import { BaseType } from '@app/_shared/models/base-type.interface';

@Component({
  selector: 'app-filter-panel-movies',
  templateUrl: './filter-panel-movies.component.html',
  styleUrls: ['./filter-panel-movies.component.sass']
})
export class FilterPanelMoviesComponent implements OnInit {

  @Output() submit = new EventEmitter<void>();

  providers: Array<Provider> = new Array<Provider>();
  genres: Array<BaseType> = new Array<BaseType>();

  constructor(
    private movieService: MovieService,
    private filterService: FilterService
  ) { 
  }

  ngOnInit() {
    this.setProviders();
    this.setGenres();
  }

  onSortResultsBySelection(selection: SortResultsBy) {
    this.filterService.setSortByPopularity(selection);
  }

  onProviderSelections(selections: Array<string>) {
    this.filterService.setProviders(selections);
  }

  onCountrySelected(selection: Country) {
    this.setProviders(selection);
  }

  onReleaseDatesSelected(selections: [Date?, Date?]) {
    this.filterService.setReleaseDates(selections);
  }

  onGenreSelections(selections: Array<BaseType>) {
    this.filterService.setGenres(selections);
  }

  setProviders(selectedCountry?: Country) {
    this.movieService
      .getProviders(selectedCountry)
      .subscribe(get => {
        this.providers = get;
    });
  }

  setGenres() {
    this.movieService
      .getGenres()
      .subscribe(get => {
        this.genres = get;
    });
  }


  onSubmit() {
    this.filterService.submitFilter();
  }

}