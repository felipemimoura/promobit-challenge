import React from 'react'
import { BACKDROP_SIZE, IMAGE_BASE_URL } from '../../config'
import { ThumbProps } from './interface'
import * as Styled from './styles'

export const Thumb: React.FC<ThumbProps> = ({ imageUrl, movieId, movieTitle }) => {
    const urlImage = `${IMAGE_BASE_URL}/${BACKDROP_SIZE}${imageUrl}`
    return (
        <div>
            <Styled.Image src={urlImage} alt={movieTitle} />
        </div>
    )
}


