import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Provider } from '@app/_shared/models/provider.interface';
import { SortResultsBy } from '@movies/models/sort-results-by';
import { MovieService } from '@movies/services/movie.service';
import { FilterService } from '@movies/services/filter.service';
import { Country } from '@app/_shared/models/country.interface';
import { TmdbService } from '@app/_shared/services/tmdb.service';

@Component({
  selector: 'app-filter-panel-movies',
  templateUrl: './filter-panel-movies.component.html',
  styleUrls: ['./filter-panel-movies.component.sass']
})
export class FilterPanelMoviesComponent implements OnInit {

  @Output() submit = new EventEmitter<void>();

  providers: Array<Provider> = new Array<Provider>();

  constructor(
    private movieService: MovieService,
    private filterService: FilterService
  ) { 
  }

  ngOnInit() {
    this.setProviders();
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

  setProviders(selectedCountry?: Country) {
    this.movieService
      .getProviders(selectedCountry)
      .subscribe(get => {
        console.log(get);
        this.providers = get;
    });
  }

  onSubmit() {
    this.filterService.submitFilter();
  }

}