export interface PaginatedResponse<Type> {
    id: number;
    page: number;
    results: Type[];
    total_results: number;
    total_pages: number;
}
