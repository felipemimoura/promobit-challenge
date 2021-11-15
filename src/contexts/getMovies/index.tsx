import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { getPopularMovies } from '../../services/controllers/getMovies';
import { Movie, MovieContext } from "./interface";

const MoviesContext = createContext<MovieContext>({} as MovieContext)


const MoviesProvider: React.FC = ({ children }) => {
    const [moviesData, setMoviesData] = useState<Movie[]>([])

    const fetchMovies = useCallback(async () => {
        const result = await getPopularMovies()
        setMoviesData(prev => ({
            ...result.results, result: result.page > 1 ? [...prev, ...result.results] : [result.results]
        }))
    }, [])

    useEffect(() => {
        fetchMovies()
    }, [fetchMovies])

    return (
        <MoviesContext.Provider value={{ movies: moviesData }}>
            {children}
        </MoviesContext.Provider>
    )
}

const useMovies = (): MovieContext => {
    const context = useContext(MoviesContext)
    if (!context) {
        throw new Error(
            'useMovies deve ser utilizado dentro de um MoviesProvider'
        )
    } else {
        return context
    }

}

export { MoviesProvider, useMovies };
