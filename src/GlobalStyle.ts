import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root{
        --maxWidth: 1280px;
        --white: #fff;
        --lightGray: #eeeeee;
        --medGrey: #353535;
        --darkGrey: #1c1c1c;
        --title: 2.4rem;
        --subtitle: 1.6rem;
        --normal: 1rem;
        --small: 0.8rem
    }

    html {
        font-size: 62.5%;
    }

    * {
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }

    body {
        margin: 0;
        padding: 0;
    }

    h1 {
        font-size: var(--title);
        font-weight: 600;
        color: var(--white)
    }

    h3 {
        font-size: var(---subtitle);
        font-weight: 600;
        color: var(--white);
    }

    p {
        font-size: var(--normal);
        color: var(--white)
    }

`