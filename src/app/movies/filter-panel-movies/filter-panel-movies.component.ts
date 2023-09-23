import { Component, OnInit } from '@angular/core';
import { SortResultsBy } from '@movies/models/sort-results-by';

@Component({
  selector: 'app-filter-panel-movies',
  templateUrl: './filter-panel-movies.component.html',
  styleUrls: ['./filter-panel-movies.component.sass']
})
export class FilterPanelMoviesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSortResultsByChange(selection: SortResultsBy) {
    // do something
  }

}
