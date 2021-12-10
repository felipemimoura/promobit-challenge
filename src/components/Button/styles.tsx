import styled from "styled-components";

export const Button = styled.button`
    display: block;
    background: var(--darkGrey);
    width: 25%;
    min-width: 20rem;
    height: 6rem;
    border-radius: 3rem;
    border: 0;
    color: var(--white);
    font-size: var(--subtitle);
    margin: 2rem auto;
    transition: all 0.3s;
    outline: none;
    cursor: pointer;

    :hover{
        opacity: 0.8;
    }
`