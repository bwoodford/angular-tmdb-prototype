import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { Country } from '@app/_shared/models/country.interface';
import { TmdbService } from '@app/_shared/services/tmdb.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-country-selector',
  templateUrl: './country-selector.component.html',
  styleUrls: ['./country-selector.component.sass']
})
export class CountrySelectorComponent implements OnInit {

  @Output() selection = new EventEmitter<Country>();
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
    this.tmdbService.getCountries().subscribe(get => {
      this.countries = get;
    });
  }

  onOptionSelected(event: MatSelectChange) {
    this.selection.emit(event.value as Country);
  }
}
