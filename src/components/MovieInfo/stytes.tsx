import styled from "styled-components";

import { IMAGE_BASE_URL, BACKDROP_SIZE } from '../../config'
import { Thumb } from "../Thumb";
import { WrapperProps } from "./interface";

export const Image = styled(Thumb)``;

export const Wrapper = styled.div<WrapperProps>`
  background: ${({ backdrop }) =>
    backdrop ? `url(${IMAGE_BASE_URL}${BACKDROP_SIZE}${backdrop})` : '#000'};
  background-size: cover;
  background-position: center;
  padding: 4rem 2rem;
  animation: animateMovieInfo 1s;
  height: calc(100vh - 13.4rem);

  @keyframes animatedMovieInfo {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
 `;

export const Content = styled.div`
    display: flex;
    margin: 0 auto;
    background: rgba(0,0,0,0.7);
    border-radius: 2rem;
    min-height: 75%;
    @media(max-width: 768px){
      flex-direction: column;
      min-height: max-content;
    }

`;

export const Text = styled.div`
    width: 100%;
    padding: 2rem 4rem;
    color: var(--white);
    font-size: var(--normal);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    
    h1{
        font-size: var(--title);
    }

    h3{
        font-size: var(--title);
        margin-bottom: 0;
    }

    p{
        font-weight: bold;
        letter-spacing: 0.08rem;
        line-height: 1.2rem;
    }
`;