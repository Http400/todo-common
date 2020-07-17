interface PaginatedResults<T> {
    items: T[];
    totalItems: number;
    currentPage: number;
    pageSize: number;
    totalPages: number;
}

export default PaginatedResults;