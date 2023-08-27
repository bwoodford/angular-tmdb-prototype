import { Movie } from "@movies/shared/movie.model";

/* Store the response for popular movies */
export class PopularMovies {

    page: number;
    results: Movie[];
    total_results: number;
    total_pages: number;

    constructor(obj?: any) {
        this.page = obj && obj.page || null;
        this.results = obj && obj.results || null;
        this.total_results = obj && obj.total_results || null;
        this.total_pages = obj && obj.total_pages || null;
    }
}
