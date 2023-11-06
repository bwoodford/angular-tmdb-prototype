import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { Country } from '@app/_shared/models/country.interface';
import { TmdbService } from '@app/_shared/services/tmdb.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-country-selector',
  templateUrl: './country-selector.component.html',
  styleUrls: ['./country-selector.component.sass']
})
export class CountrySelectorComponent implements OnInit {

  @Output() selection = new EventEmitter<Country>();

  $unsub = new Subject<void>();
  countries = new Array<Country>();

  readonly defaultCountry: Country = {
    english_name: "United States",
    native_name: "United States",
    iso_3166_1: "US"
  }

  searchText = "";

  constructor(
    private tmdbService: TmdbService
  ) { 
  }

  ngOnInit() {
    this.tmdbService
    .getCountries()
    .pipe(takeUntil(this.$unsub))
    .subscribe(get => {
      this.countries = get;
    });
  }

  ngOnDestroy() {
    this.$unsub.next();
    this.$unsub.complete();
  }

  onOptionSelected(event: MatSelectChange) {
    this.selection.emit(event.value as Country);
  }
}
