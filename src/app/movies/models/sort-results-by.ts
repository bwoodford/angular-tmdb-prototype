import { KeyValue } from "@angular/common";

export enum SortResultsBy {
    PopularityDescending = "popularity.desc",
    PopularityAscending = "popularity.asc",
    RevenueDescending = "revenue.desc",
    RevenueAscending = "revenue.asc",
    PrimaryReleaseDateDescending = "primary_release_date.desc",
    PrimaryReleaseDateAscending = "primary_release_date.asc",
    VoteAvergageDescending = "vote_average.desc",
    VoteAvergageAscending = "vote_average.asc",
    VoteCountDescending = "vote_count.desc",
    VoteCountAscending = "vote_count.asc",
    TitleDescending = "title.desc",
    TitleAscending = "title.asc",
}

export const sortResultsByDisplay = {
    [SortResultsBy.PopularityDescending]: "Popularity Descending",
    [SortResultsBy.PopularityAscending]: "Popularity Ascending",
    [SortResultsBy.VoteAvergageDescending]: "Rating Descending",
    [SortResultsBy.VoteAvergageAscending]: "Rating Ascending",
    [SortResultsBy.PrimaryReleaseDateDescending]: "Release Date Descending",
    [SortResultsBy.PrimaryReleaseDateAscending]: "Release Date Ascending",
    [SortResultsBy.TitleAscending]: "Title (A-Z)",
    [SortResultsBy.TitleDescending]: "Title (Z-A)",
}

// Preserve ordering of SortResultsByDisplay
export const sortResultsByDisplayOrder = (a: KeyValue<string,string>, b: KeyValue<string,string>): number => {
    return 0;
}