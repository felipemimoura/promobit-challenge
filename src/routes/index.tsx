import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Header } from '../components/Header'
import { MoviesProvider } from '../contexts/getMovies'
import { GlobalStyle } from '../GlobalStyle'
import { Home } from '../pages/Home'
import { Movie } from '../pages/Movie'

export const Router = () => {
    return (
        <BrowserRouter>
            <MoviesProvider>
                <GlobalStyle />
                <Header userName="Felipe Moura" />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/:movieId" element={<Movie />} />
                </Routes>
            </MoviesProvider>
        </BrowserRouter>
    )
}


