import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { distinctUntilChanged, map, take, throttleTime } from 'rxjs/operators';
import { Movie } from '@movies/models/movie.model';
import { MovieService } from '@movies/services/movie.service';
import { DiscoverMovieResponse } from '@movies/models/discover-movie-response.model';

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
    this.getPaginatedMovies(this.pageNumber).pipe(
      map((resp: DiscoverMovieResponse) => this.movies = resp.results),
      take(1)
    ).subscribe();
  }

  ngOnDestroy(): void {
  }
  
  getPaginatedMovies(page: number = 1): Observable<DiscoverMovieResponse> {
    if (page > this.pageLimit) {
      return new Observable<DiscoverMovieResponse>();
    }
    return this.movieService.getMovies(page);
  }
  
  onScroll() {
    this.getPaginatedMovies(this.pageNumber += 1).pipe(
      distinctUntilChanged(),
      throttleTime(10),
      take(1)
    ).subscribe(resp => {
      this.movies.push(...resp.results);
    });
  }
}
