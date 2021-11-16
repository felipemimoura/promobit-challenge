import React, { useEffect, useState } from 'react'
import { HeroImage } from '../../components/HeroImage'

import { useMovies } from '../../contexts/getMovies'
import { FirstMovieProps } from './interface'

export const Home: React.FC = () => {
    const { movies } = useMovies()
    const [firstMovie, setFirstMovie] = useState<FirstMovieProps>({} as FirstMovieProps)

    useEffect(() => {
        if (!movies[0]) {
            return
        }

        setFirstMovie({
            title: movies[0].title,
            description: movies[0].overview,
            imageUrl: movies[0].backdrop_path
        })

    }, [movies])
    return (
        <div>
            {firstMovie && <HeroImage description={firstMovie.description} title={firstMovie.title} imageUrl={firstMovie.imageUrl} />}

        </div>
    )
}


