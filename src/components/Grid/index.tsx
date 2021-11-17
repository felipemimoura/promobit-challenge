import React, { useEffect, useState } from 'react'
import { useMovies } from '../../contexts/getMovies'
import { Movie } from '../../contexts/getMovies/interface'
import { Thumb } from '../Thumb'
import { GridProps } from './interface'
import * as Styled from './styles'


export const Grid: React.FC<GridProps> = ({ header }) => {
    const { movies } = useMovies()
    const [list, setList] = useState<Movie[]>([])

    useEffect(() => {
        if (!movies) {
            return
        }

        setList(movies)



    }, [movies])

    return (
        <Styled.Wrapper>
            <h1>{header}</h1>
            <Styled.Content>
                {list.map((movie) => (<Thumb key={movie.id} movieId={movie.id} movieTitle={movie.title} imageUrl={movie.backdrop_path} />))}
            </Styled.Content>

        </Styled.Wrapper>
    )
}


