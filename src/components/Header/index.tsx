import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as TMDBLOGO } from '../../images/tmdb_logo.svg'
import SvgIcon from '../SVGIcon'
import { HeaderProps } from './interface'
import * as Styled from './styles'

export const Header: React.FC<HeaderProps> = ({ userName }) => (
    <Styled.Header>
        <Styled.Content>
            <Link to="/" >
                <SvgIcon Icon={TMDBLOGO} width={16} height={8} color="#FFf" />
            </Link>

            <h3>{userName}</h3>

        </Styled.Content>
    </Styled.Header>
)