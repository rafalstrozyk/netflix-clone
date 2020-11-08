import { createGlobalStyle } from 'styled-components';
import { theme } from 'theme/theme';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;700&display=swap');

    *, *::before, *::after {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        box-sizing: border-box;
    }

    html  {
        font-size:62.5%;
    }

    body {
        font-size: 1.6rem;
        margin: 0;
        padding: 0;
        font-weight: 300;
        display: block;
        background: ${theme.backColor};
        color: ${theme.fontColorSecondaryTwo};
        line-height: ${theme.lineHeight};
        font-family: 'Montserrat', sans-serif;
    }

    a {
        text-decoration: none;
        cursor: pointer;
        color: ${theme.fontColorSecondaryOne};
        background-color: transparent;
    }
`;

export default GlobalStyle;
