import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { getCategories } from "../../services/controllers/getCategories";
import { getPopularMovies } from '../../services/controllers/getMovies';
import { Categories, Movie, MovieContext } from "./interface";

const MoviesContext = createContext<MovieContext>({} as MovieContext)


const MoviesProvider: React.FC = ({ children }) => {
    const [moviesData, setMoviesData] = useState<Movie[]>([])
    const [pages, setPages] = useState(1)
    const [categoriesData, setCategoriesData] = useState<Categories[]>([])
    const [category, setCategory] = useState(0)

    const fetchMovies = useCallback(async () => {
        const result = await getPopularMovies(pages)
        setMoviesData(state => [...state, ...result.results])

    }, [pages])

    const featchCategories = useCallback(async () => {
        const result = await getCategories()
        setCategoriesData(result.genres)
    }, [])

    const filterMoviesPerCategory = useCallback((movies: Movie[], categoryId: number): Movie[] => {
        let moviesList = moviesData
        if (category === 0) {
            setMoviesData(moviesData)
            return moviesList
        }

        moviesList = movies.filter((movie) => movie.genre_ids.find((genre) => genre === categoryId))

        return moviesList
    }, [category, moviesData])

    const selectedCategory = useCallback((id: number) => {
        setCategory(id)

        filterMoviesPerCategory(moviesData, id)
    }, [filterMoviesPerCategory, moviesData])

    const loadMorePages = useCallback((nextPage: number) => {
        setPages(nextPage)
    }, [])

    useEffect(() => {
        fetchMovies()
        featchCategories()
    }, [featchCategories, fetchMovies])

    return (
        <MoviesContext.Provider value={{ movies: moviesData, categories: categoriesData, pages, loadMorePages, selectedCategory, category, filterMoviesPerCategory }}>
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

