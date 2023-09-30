import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { SortResultsBy, sortResultsByDisplay, sortResultsByDisplayOrder } from '@app/movies/models/sort-results-by';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.sass']
})
export class SortComponent implements OnInit {

  @Output() selection: EventEmitter<SortResultsBy> = new EventEmitter();

  readonly order = sortResultsByDisplayOrder;
  readonly options = sortResultsByDisplay;
  readonly default = SortResultsBy.PopularityDescending;

  constructor() {}

  ngOnInit(): void {
  }

  onSelection(event: MatSelectChange): void {
    this.selection.emit(event.value as SortResultsBy);
  }
}
