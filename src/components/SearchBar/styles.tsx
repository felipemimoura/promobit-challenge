import styled from "styled-components";
import { ButtonProps } from "./interface";

export const Wrapper = styled.div`
    margin: 0 auto;
    display: flex;
    align-items: center;
    height: 10rem;
    background-color: var(--darkGrey);
`

export const Content = styled.div`
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center ;
    gap: 0.8rem;
    overflow-y: auto;
    width: 100%;
    height: 100%;
`

export const Button = styled.button<ButtonProps>`
    cursor: pointer;
    background-color: transparent;
    border: 1px solid white;
    border-radius: 0.8rem;
    color:${props => props.isSelected ? 'white' : 'red'};
    padding:0.8rem;
    white-space: nowrap;
`