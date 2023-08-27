import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CardDisplay } from '@app/shared/card-display';
import { Observable } from 'rxjs';
import { distinctUntilChanged, map, take, throttleTime } from 'rxjs/operators';
import { Movie } from '../shared/movie.model';
import { MovieService } from '../shared/movie.service';
import { PopularMovies } from '../shared/popular-movies.model';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.sass']
})
export class MovieListComponent implements OnInit {
  
  @Input() movies: Array<CardDisplay> = new Array<CardDisplay>()
  @Output() scrolled: EventEmitter<void> =  new EventEmitter<void>()

  constructor(
  ) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
  }
  
  onScrolled(): void {
    this.scrolled.emit();
  }
}
