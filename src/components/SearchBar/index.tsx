import React, { useEffect, useState } from 'react'
import { useMovies } from '../../contexts/getMovies'
import { Categories, SearchBarProps } from './interface'
import * as Styled from './styles'

export const SearchBar: React.FC<SearchBarProps> = ({ handleSelectCategory, category }) => {
    const { categories } = useMovies()
    const [categoriesList, setCategoriesList] = useState<Categories[]>([])
    const [categorySelected, setCategorySelected] = useState(0)

    const handleClickCategory = (id: number) => {
        console.log(id)
        handleSelectCategory(id)
    }

    useEffect(() => {
        setCategoriesList(categories)
        setCategorySelected(category)
    }, [categories, category])

    return (
        <Styled.Wrapper>
            <Styled.Content>
                {categoriesList.map((category) => (<Styled.Button isSelected={category.id === categorySelected} key={category.id} onClick={() => handleClickCategory(category.id)}>{category.name} </Styled.Button>))}

            </Styled.Content>
        </Styled.Wrapper>
    )
}
