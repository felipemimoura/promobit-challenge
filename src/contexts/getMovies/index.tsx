import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { getCategories } from "../../services/controllers/getCategories";
import { getPopularMovies } from '../../services/controllers/getMovies';
import { Categories, Movie, MovieContext } from "./interface";

const MoviesContext = createContext<MovieContext>({} as MovieContext)


const MoviesProvider: React.FC = ({ children }) => {
    const [moviesData, setMoviesData] = useState<Movie[]>([])
    const [categoriesData, setCategoriesData] = useState<Categories[]>([])

    const fetchMovies = useCallback(async () => {
        const result = await getPopularMovies()
        if (result.page > 1) {
            setMoviesData(state => [...state, ...result.results])
            return
        }
        setMoviesData(result.results)

    }, [])

    const featchCategories = useCallback(async () => {
        const result = await getCategories()
        setCategoriesData(result.genres)
    }, [])

    useEffect(() => {
        fetchMovies()
        featchCategories()
    }, [featchCategories, fetchMovies])

    return (
        <MoviesContext.Provider value={{ movies: moviesData, categories: categoriesData }}>
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

