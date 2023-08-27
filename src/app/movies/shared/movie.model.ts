import { CardDisplay } from "@app/shared/card-display";

/*
    Store basic Movie information
*/
export class Movie implements CardDisplay {
    id: string;
    title: string;
    overview: string;
    poster_path: string;
    adult: boolean;
    release_date: string;
    genre_ids: number[];
    original_title: string;
    original_language: string;
    backdrop_path: string | null;
    popularity: number;
    vote_count: number;
    video: boolean;
    vote_average: number;

    constructor(obj?: any) {
        this.id = obj && obj.id || null;
        this.title = obj && obj.title || null;
        this.overview = obj && obj.overview || null;
        this.poster_path = obj && obj.poster_path || null;
        this.adult = obj && obj.adult || null;
        this.release_date = obj && obj.release_date || null;
        this.genre_ids = obj && obj.genre_ids || null;
        this.original_title = obj && obj.original_title || null;
        this.original_language = obj && obj.original_language || null;
        this.backdrop_path = obj && obj.backdrop_path || null;
        this.popularity = obj && obj.popularity || null;
        this.vote_count = obj && obj.vote_count || null;
        this.video = obj && obj.video || null;
        this.vote_average = obj && obj.vote_average || null;
    }
}
