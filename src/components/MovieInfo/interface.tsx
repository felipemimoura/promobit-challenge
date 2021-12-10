export interface Movie {
    id: number;
    title: string;
    release_date: string;
    overview: string;
    backdrop_path: string
}

export interface WrapperProps {
    backdrop: string
}
export interface MovieInfoProps {
    movie: Movie
}

//imageUrl, movieId, movieTitle