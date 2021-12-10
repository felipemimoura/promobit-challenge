export interface Movie {
    id: number;
    title: string;
    backdrop_path: string;
    overview: string;
    release_date: string
    genre_ids: number[]
}

export interface MovieContext {
    page: number;
    total_pages: number;
    results: Movie[]
}