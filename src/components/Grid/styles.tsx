import styled from 'styled-components'

export const Wrapper = styled.main`
    max-width: var(--maxWidth);
    margin: 0 auto;
    padding: 0 2rem;

    h1{
        color: var(--medGrey)
    }
`

export const Content = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
    grid-gap: 3.6rem;
`