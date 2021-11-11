import { POPULAR_URL } from './config'

const apiSettings = {
    fetchMovies: async(page: number)=> {
        const endpoint = `${POPULAR_URL}&=page=${page}`
        const result = await (await fetch(endpoint)).json()

        return result
    }
}


export default apiSettings