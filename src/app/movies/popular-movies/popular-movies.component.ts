import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { distinctUntilChanged, map, take, throttleTime } from 'rxjs/operators';
import { Movie } from '../shared/movie.model';
import { MovieService } from '../shared/movie.service';
import { PopularMovies } from '../shared/popular-movies.model';

@Component({
  selector: 'app-popular-movies',
  templateUrl: './popular-movies.component.html',
  styleUrls: ['./popular-movies.component.sass']
})
export class PopularMoviesComponent implements OnInit {
  
  movies: Movie[] = [];
  pageNumber: number = 1;
  pageLimit: number = 20;
  
  constructor(
    private movieService: MovieService
  ) {}

  ngOnInit(): void {
    this.getPopularMovies(this.pageNumber).pipe(
      map((resp: PopularMovies) => this.movies = resp.results),
      take(1)
    ).subscribe();
  }

  ngOnDestroy(): void {
  }
  
  getPopularMovies(page: number = 1): Observable<PopularMovies> {
    if (page > this.pageLimit) {
      return new Observable<PopularMovies>();
    }
    return this.movieService.getPopularMovies(page);
  }
  
  onScroll() {
    this.getPopularMovies(this.pageNumber += 1).pipe(
      distinctUntilChanged(),
      throttleTime(10),
      take(1)
    ).subscribe(resp => {
      this.movies.push(...resp.results);
    });
  }
}
