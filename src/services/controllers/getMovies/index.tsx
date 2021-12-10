import { POPULAR_URL } from '../../../config'
import api from '../../API'
import { MovieContext } from './interface'

export const getPopularMovies = async (pageNumber: number): Promise<MovieContext> => {
    const result = await api.get<MovieContext>(`${POPULAR_URL}&page=${pageNumber}`)
    const { page, results, total_pages } = result.data
    return { page, results, total_pages }
}