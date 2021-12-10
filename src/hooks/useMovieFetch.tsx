import { useCallback, useEffect, useState } from 'react'
import { getMovie } from '../services/controllers/getMovie'

interface Movie {
    id: number;
    title: string;
    release_date: string;
    overview: string;
    backdrop_path: string
}

export const useMovieFetch = (movieId: string) => {
    const [movieData, setMovieData] = useState<Movie>({} as Movie)

    const fetchMovie = useCallback(async () => {
        const movie = await getMovie(movieId)
        setMovieData(movie)
    }, [movieId])

    useEffect(() => {
        fetchMovie()
    }, [fetchMovie, movieId])

    return { movieData }
}