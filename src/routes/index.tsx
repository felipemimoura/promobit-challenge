import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Header } from '../components/Header'
import { MoviesProvider } from '../contexts/getMovies'
import { GlobalStyle } from '../GlobalStyle'
import { Home } from '../pages/Home'
import { MoviePage } from '../pages/Movie'

export const Router = () => {
    return (
        <BrowserRouter>
            <MoviesProvider>
                <GlobalStyle />
                <Header userName="Felipe Moura" />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/:id" element={<MoviePage />} />
                </Routes>
            </MoviesProvider>
        </BrowserRouter>
    )
}


