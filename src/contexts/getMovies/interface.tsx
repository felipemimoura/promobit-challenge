export interface Movie {
    id: number;
    title: string;
    backdrop_path: string;
    overview: string;
    release_date: string;
    genre_ids: number[]
}

export interface Categories {
    id: number,
    name: string
}

export interface CategoriesData {
    genres: Categories[]
}
export interface MovieContext {
    movies: Movie[]
    categories: Categories[]
}