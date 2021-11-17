export interface Movie {
    id: number;
    title: string;
    backdrop_path: string;
    overview: string;
    release_date: string
}

export interface MovieContext {
    page: number;
    results: Movie[]
}