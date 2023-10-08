import { Pipe, PipeTransform } from '@angular/core';
import { Country } from '@app/_shared/models/country.interface';

@Pipe({
  name: 'countryFilter'
})
export class CountryFilterPipe implements PipeTransform {

  transform(countries: Country[], searchText: string): Country[] {
    if(!countries || !searchText) {
      return countries;
    }

    searchText = searchText.toLowerCase();

    return countries.filter(country => country.english_name.toLowerCase().includes(searchText));
  }
}