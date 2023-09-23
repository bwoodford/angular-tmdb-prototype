import { Movie } from "@movies/models/movie.model";

export class DiscoverMovieResponse {

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
