const API_URL = 'https://api.themoviedb.org/3/'
const API_KEY = process.env.REACT_APP_API_KEY

const POPULAR_URL = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US`

export {
    API_URL,
    POPULAR_URL
}