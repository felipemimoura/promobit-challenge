import React, { useEffect, useState } from 'react'
import { Movie, MovieInfoProps } from './interface'
import * as Styled from './stytes'

export const MovieInfo: React.FC<MovieInfoProps> = ({ movie }) => {
    const [movieInfo, setMovieInfo] = useState<Movie>({} as Movie)
    console.log(movieInfo.backdrop_path)

    useEffect(() => {
        setMovieInfo(movie)
    }, [movie])
    return (
        <Styled.Wrapper backdrop={movie.backdrop_path}>
            <Styled.Content>
                <Styled.Image movieId={movieInfo.id} movieTitle={movieInfo.title} imageUrl={movieInfo.backdrop_path} />
                <Styled.Text>
                    <h1>{movie.title}</h1>
                    <h3>Descrição</h3>
                    <p>{movie.overview}</p>
                </Styled.Text>
            </Styled.Content>
        </Styled.Wrapper>
    )
}


