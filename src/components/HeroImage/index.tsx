import React, { useEffect, useState } from 'react'
import { BACKDROP_SIZE, IMAGE_BASE_URL } from '../../config'
import { HeroImageProps } from './interface'
import * as Styled from './styles'

export const HeroImage: React.FC<HeroImageProps> = ({ title, description, imageUrl }) => {
    const [urlImage, setUrlImage] = useState('')
    useEffect(() => {
        setUrlImage(`${IMAGE_BASE_URL}/${BACKDROP_SIZE}/${imageUrl}`)
    }, [imageUrl])

    return (
        <Styled.Wrapper imageUrl={urlImage}>
            <Styled.Content>
                <Styled.Text>
                    <h1>{title}</h1>
                    <p>{description}</p>
                </Styled.Text>
            </Styled.Content>
        </Styled.Wrapper>
    )
}


