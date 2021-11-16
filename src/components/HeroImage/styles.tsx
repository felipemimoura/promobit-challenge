import styled from "styled-components";
import { WrapperProps } from "./interface";

export const Wrapper = styled.div<WrapperProps>`
    background: linear-gradient(
        to bottom, rgba(0,0,0,0)
        41%, rgba(0,0,0,0.65)
        100%
    ),
        url(${({ imageUrl }) => imageUrl}), var(--darkGrey);
    background-size: 100% ,cover;
    background-position: center;
    height: 60rem;
    position: relative;
    animation: animateHeroImage 1s;

    @keyframes animateHeroImage{
        from{
            opacity: 0;
        }
        to{
            opacity: 1;
        }
    }
`

export const Content = styled.div`
    padding: 2rem;
    max-width: var(--maxWidth);
    margin: 0 auto;
`

export const Text = styled.div`
    position: absolute;
    max-width: 70rem;
    min-height: 10rem;
    bottom: 4rem;
    margin-right: 2rem;
    z-index: 5;
    color:var(--white);

  @media(max-width: 768px){
      h1 {
          font-size: var(--subtitle);
      }
      p{
          font-size: 0.8rem;
      }
  }

`