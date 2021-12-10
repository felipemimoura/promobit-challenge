import { API_KEY, API_URL } from '../../../config'
import api from '../../API'
import { Movie } from './interface'


export const getMovie = async (movieId: string): Promise<Movie> => {
    const result = await api.get<Movie>(`${API_URL}movie/${movieId}?api_key=${API_KEY}`)
    return result.data

}