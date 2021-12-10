import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { useMovieFetch } from '../../hooks/useMovieFetch'


interface Movie {
    title: string;
    release_date: string;
    overview: string;
    backdrop_path: string
}

export const MoviePage = () => {
    const [movieId, setMovieId] = useState('')
    const [movieInfo, setMovieInfo] = useState<Movie>({} as Movie)
    const { id } = useParams<string>()
    const { movieData } = useMovieFetch(movieId)

    useEffect(() => {
        if (!id) {
            return
        }
        setMovieId(id)
    }, [id])

    useEffect(() => {
        setMovieInfo(movieData)
    }, [id, movieData])

    return (
        <div>
            <p style={{ color: 'black' }}>{movieInfo && movieInfo.title}</p>
        </div>
    )
}

