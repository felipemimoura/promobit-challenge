import { POPULAR_URL } from '../../../config'
import api from '../../API'
import { MovieContext } from './interface'

export const getPopularMovies = async (): Promise<MovieContext> => {
    const result = await api.get<MovieContext>(`${POPULAR_URL}`)
    const { page, results } = result.data
    return { page, results }
}