import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TmdbService {
  
  TMDB_API_KEY: string = environment.TMDB_API_KEY
  TMDB_URL_KEY: string = environment.TMDB_URL_KEY
    
  constructor() { }
  
  getPopularMovies(page: number = 1): string {
    return `${this.TMDB_URL_KEY}/movie/popular?api_key=${this.TMDB_API_KEY}&page=${page}`;
  }
  
  getTrendingMedia(media_type: MediaTypes = MediaTypes.Movie, time_window: TimeWindows = TimeWindows.Day): string{
    return `${this.TMDB_URL_KEY}/trending/${media_type}/${time_window}?api_key=${this.TMDB_API_KEY}`;
  }
  
  getNowPlayingMovies(page: number = 1): string {
    return `${this.TMDB_URL_KEY}/movie/now_playing?api_key=${this.TMDB_API_KEY}&page=${page}`;
  }

  getUpcomingMovies(page: number = 1): string {
    return `${this.TMDB_URL_KEY}/movie/upcoming?api_key=${this.TMDB_API_KEY}&page=${page}`;
  }
  
  getTopRatedMovies(page: number = 1): string {
    return `${this.TMDB_URL_KEY}/movie/top_rated?api_key=${this.TMDB_API_KEY}&page=${page}`;
  }

}

export enum MediaTypes {
  All = "all",
  Movie = "movie",
  TV = "tv",
  Person = "person"
}

export enum TimeWindows {
  Day = "day",
  Week = "Week"
}
