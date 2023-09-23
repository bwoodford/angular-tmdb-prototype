import { SortResultsBy } from "@movies/models/sort-results-by.enum";

export class DiscoverMovieRequest {

    certification?: string;
    certification_gte?: string;
    certification_lte?: string;
    certification_country?: string;
    include_adult: boolean = false;
    include_video: boolean = false;
    language: string = "en-US";
    page: number = 1;
    primary_release_year?: number;
    primary_release_date_gte?: Date;
    primary_release_date_lte?: Date;
    region?: string;
    release_date_gte?: Date;
    release_date_lte?: Date;
    sort_by: string = SortResultsBy.PopularityDescending;
    vote_average_gte?: number;
    vote_average_lte?: number;
    vote_count_gte?: number;
    vote_count_lte?: number;
    watch_region?: string;
    with_cast?: string;
    with_companies?: string;
    with_crew?: string;
    with_genres?: string;
    with_keywords?: string;
    with_origin_country?: string;
    with_original_language?: string;
    with_people?: string;
    with_release_type?: number;
    with_runtime_gte?: number;
    with_runtime_lte?: number;
    with_watch_monetization_types?: string;
    with_watch_providers?: string;
    without_companies?: string;
    without_genres?: string;
    without_keywords?: string;
    without_watch_providers?: string;
    year?: number | null;

    toQueryString() {
        let result = "";
        for (let key in this) {
            if (this.hasOwnProperty(key) && this[key] !== undefined) {
                result += key + "=";

                if (this[key] instanceof Date) {
                    // Format the date as ISO 8601
                    result += (this[key] as unknown as Date).toISOString();
                } else {
                    result += String(this[key]);
                }
    
                result += "&";
            }
        }
        // Remove the trailing ampersand
        return result.slice(0, -1);
    }
}