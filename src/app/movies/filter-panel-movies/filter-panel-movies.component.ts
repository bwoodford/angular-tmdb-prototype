import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Provider } from '@app/_shared/models/provider.model';
import { SortResultsBy } from '@movies/models/sort-results-by';
import { MovieService } from '@movies/services/movie.service';
import { FilterService } from '@movies/services/filter.service';

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
    this.movieService.getProviders().subscribe(resp => {
      this.providers = resp;
    });
  }

  onSortResultsBySelection(selection: SortResultsBy) {
    this.filterService.setSortByPopularity(selection);
  }

  onProviderSelections(selections: Array<string>) {
    //this.filterService.setProviders(selections)
  }

  onSubmit() {
    this.filterService.submitFilter();
  }

}