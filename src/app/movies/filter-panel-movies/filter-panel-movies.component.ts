import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Provider } from '@app/_shared/models/provider.interface';
import { SortResultsBy } from '@movies/models/sort-results-by';
import { MovieService } from '@movies/services/movie.service';
import { FilterService } from '@movies/services/filter.service';
import { Country } from '@app/_shared/models/country.interface';
import { BaseType } from '@app/_shared/models/base-type.interface';
import { map, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-filter-panel-movies',
  templateUrl: './filter-panel-movies.component.html',
  styleUrls: ['./filter-panel-movies.component.sass']
})
export class FilterPanelMoviesComponent implements OnInit {

  @Output() submit = new EventEmitter<void>();

  $unsub = new Subject<void>();

  providers = new Array<Provider>();
  genres = new Array<BaseType>();
  certifications = new Array<BaseType>();

  constructor(
    private movieService: MovieService,
    private filterService: FilterService
  ) { 
  }

  ngOnInit() {
    this.setProviders();
    this.setGenres();
    this.setCertifications();
  }

  ngOnDestroy() {
    this.$unsub.next();
    this.$unsub.complete();
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

  onCertificationSelections(selections: Array<BaseType>) {
    this.filterService.setCertifications(selections);
  }

  setProviders(selectedCountry?: Country) {
    this.movieService
      .getProviders(selectedCountry)
      .pipe(takeUntil(this.$unsub))
      .subscribe(get => {
        this.providers = get;
    });
  }

  setGenres() {
    this.movieService
      .getGenres()
      .pipe(takeUntil(this.$unsub))
      .subscribe(get => {
        this.genres = get;
    });
  }

  setCertifications() {
    this.movieService
      .getCertifications()
      .pipe(
        takeUntil(this.$unsub),
        map(certs => certs.map(cert => cert.toBaseClass()))
      )
      .subscribe(get => {
        this.certifications = get;
    });
  }

  onSubmit() {
    this.filterService.submitFilter();
  }

}