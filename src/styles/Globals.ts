import { createGlobalStyle } from 'styled-components';
import colors from 'styles/colors';

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body {
        padding: 0 20px;
        font-family: 'Nunito', sans-serif;
        font-size: 18px;
        color: ${colors.app.primaryBlack};
        background: ${colors.app.primaryGray3}
    }

    a {
        color: ${colors.app.primaryBlack};
        text-decoration: none;
    }

    button {
        font-family: 'Nunito', sans-serif;
    }

    b {
        font-weight: 700;
    }
`;

export default GlobalStyles;