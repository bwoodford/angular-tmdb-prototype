import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { distinctUntilChanged, take, throttleTime } from 'rxjs/operators';
import { Movie } from '@movies/models/movie.model';
import { MovieService } from '@movies/services/movie.service';
import { PaginatedResponse } from '@app/_shared/models/paginated-response.interface';
import { DiscoverMovieRequest } from '@movies/models/discover-movie-request.model';
import { FilterService } from '@movies/services/filter.service';

@Component({
  selector: 'app-popular-movies',
  templateUrl: './popular-movies.component.html',
  styleUrls: ['./popular-movies.component.sass']
})
export class PopularMoviesComponent implements OnInit {

  movies: Movie[];
  request: DiscoverMovieRequest;
  
  constructor(
    private movieService: MovieService,
    private filterService: FilterService
  ) {
    this.request = new DiscoverMovieRequest();
    this.movies = [];
  }

  ngOnInit() {
    this.filterService.getFilter().subscribe(event => {
      this.request = event;
      this.movies = [];
      this.onScroll();
    });
  }

  getPaginatedMovies(): Observable<PaginatedResponse<Movie>> {
    let movies = this.movieService.getMovies(this.request);
    this.request.nextPage();
    return movies;
  }
  
  onScroll() {
    this.getPaginatedMovies().pipe(
      distinctUntilChanged(),
      throttleTime(10),
      take(1)
    ).subscribe(resp => {
      this.movies.push(...resp.results);
    });
  }
}
