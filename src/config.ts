const API_URL = 'https://api.themoviedb.org/3/'
const API_KEY = process.env.REACT_APP_API_KEY

const POPULAR_URL = `${API_URL}movie/popular?api_key=${API_KEY}&language=pt-BR`
const IMAGE_BASE_URL = 'http://image.tmdb.org/t/p';
const BACKDROP_SIZE = '/w1280';

const CATEGORIES_URL = `${API_URL}/genre/movie/list?api_key=${API_KEY}&language=pt-BR`


export {
    API_URL,
    API_KEY,
    POPULAR_URL,
    IMAGE_BASE_URL,
    BACKDROP_SIZE,
    CATEGORIES_URL
}