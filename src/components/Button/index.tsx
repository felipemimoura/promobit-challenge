import React from 'react';
import { useMovies } from '../../contexts/getMovies';
import { ButtonProps } from './interface';
import * as Styled from './styles';

export const Button: React.FC<ButtonProps> = ({ text }) => {
    const { pages, loadMorePages } = useMovies();
    return (
        <Styled.Button type="button" onClick={() => loadMorePages(pages + 1)}>
            {text}
        </Styled.Button>
    );
};
