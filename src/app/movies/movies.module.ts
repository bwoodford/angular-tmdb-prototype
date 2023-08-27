import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MoviesRoutingModule } from './movies-routing.module';
import { MovieListComponent } from './movie-list/movie-list.component';
import { SharedModule } from '../shared/shared.module';
import { MoviesComponent } from './movies/movies.component';
import { PopularMoviesComponent } from './popular-movies/popular-movies.component';
import { UpcomingMoviesComponent } from './upcoming-movies/upcoming-movies.component';
import { TopRatedMoviesComponent } from './top-rated-movies/top-rated-movies.component';
import { NowPlayingMoviesComponent } from './now-playing-movies/now-playing-movies.component';

@NgModule({
  declarations: [
    MovieListComponent,
    MoviesComponent,
    PopularMoviesComponent,
    UpcomingMoviesComponent,
    TopRatedMoviesComponent,
    NowPlayingMoviesComponent,
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    MatCardModule,
    FlexLayoutModule,
    SharedModule
  ],
  providers: [
  ]
})
export class MoviesModule { }