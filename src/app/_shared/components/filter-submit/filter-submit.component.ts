import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FilterService } from '@app/movies/services/filter.service';

@Component({
  selector: 'app-filter-submit',
  templateUrl: './filter-submit.component.html',
  styleUrls: ['./filter-submit.component.sass']
})
export class FilterSubmitComponent {

  @Output() submit = new EventEmitter<void>();

  constructor(
    public filterService: FilterService
  ) { 

  }

  onSubmit() {
    this.submit.next(undefined);
  }
}
