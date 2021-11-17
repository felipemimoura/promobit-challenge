import styled from "styled-components";

export const Image = styled.img`
    width: 100%;
    max-width: 72rem;
    transform: all 0.3s;
    object-fit: cover;
    border-radius: 2rem;
    animation: animateThumb 0.5s;
    cursor: pointer;

    &:hover {
        opacity: 0.8;
    }

    @keyframes animateThumb {
        from{
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
    
 `;