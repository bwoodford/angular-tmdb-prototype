import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { DiscoverMovieRequest } from '@movies/models/discover-movie-request.model';

@Injectable({
  providedIn: 'root'
})
export class TmdbService {
  
  readonly TMDB_API_KEY: string = environment.TMDB_API_KEY
  readonly TMDB_URL_KEY: string = environment.TMDB_URL_KEY
    
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

  getDiscoverMovies(request: DiscoverMovieRequest): string {
    return `${this.TMDB_URL_KEY}/movie/top_rated?api_key=${this.TMDB_API_KEY}&${request.toQueryString()}`;
  }

  getAvailableProviderRegions(language: string = "en-US"): string {
    return `${this.TMDB_URL_KEY}/watch/providers/regions?api_key=${this.TMDB_API_KEY}&language=${language}`;
  }

  // TODO: encapsulate params into model
  getMovieProviders(language: string = "en-US", watch_region: string = ""): string {
    return `${this.TMDB_URL_KEY}/watch/providers/movie?api_key=${this.TMDB_API_KEY}&language=${language}&watch_region=${watch_region}`;
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
