import React, { useCallback, useEffect, useState } from 'react'
import { useMovies } from '../../contexts/getMovies'
import { Categories } from './interface'
import * as Styled from './styles'

export const SearchBar: React.FC = () => {
    const { categories, category, selectedCategory } = useMovies()
    const [categoriesList, setCategoriesList] = useState<Categories[]>([])
    const [categorySelected, setCategorySelected] = useState(0)
    const handleClickCategory = useCallback((id: number) => {
        if (categorySelected === id) {
            selectedCategory(0)
            setCategorySelected(categorySelected)
            return
        }
        selectedCategory(id)
    }, [categorySelected, selectedCategory])

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
