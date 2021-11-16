const API_URL = 'https://api.themoviedb.org/3/'
const API_KEY = process.env.REACT_APP_API_KEY

const POPULAR_URL = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US`
const IMAGE_BASE_URL = 'http://image.tmdb.org/t/p/';
const BACKDROP_SIZE = 'w1280';



export {
    API_URL,
    POPULAR_URL,
    IMAGE_BASE_URL,
    BACKDROP_SIZE
}