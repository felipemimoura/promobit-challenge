import React, { useEffect, useState } from 'react'
import { Grid } from '../../components/Grid'
import { HeroImage } from '../../components/HeroImage'
import { SearchBar } from '../../components/SearchBar'
import { Button } from '../../components/Button'
import { useMovies } from '../../contexts/getMovies'
import { FirstMovieProps } from './interface'


export const Home: React.FC = () => {
    const { movies } = useMovies()
    const [firstMovie, setFirstMovie] = useState<FirstMovieProps>({} as FirstMovieProps)

    useEffect(() => {
        if (!movies[0]) {
            return
        }
        console.log(movies)
        setFirstMovie({
            title: movies[0].title,
            description: movies[0].overview,
            imageUrl: movies[0].backdrop_path
        })
    }, [movies])
    return (
        <div style={{ margin: '0 auto' }}>
            {firstMovie && <HeroImage description={firstMovie.description} title={firstMovie.title} imageUrl={`${firstMovie.imageUrl}`} />}
            <SearchBar />
            <Grid header="Filmes Populares" />
            <Button text='Carregar mais' />

        </div>
    )
}


