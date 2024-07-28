import { createGlobalStyle } from "styled-components";
export * as FeatherIcons from "react-icons/fi";

export const GlobalStyles = createGlobalStyle`

    :root {
        --white: #ffffff;
    }

    *,
    *::after,
    *::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
    }
    body {
        min-height: 100vh;
        background-color: ${(props) => props.theme.colors.backgrounds[200]};
        overflow-x: hidden;
        letter-spacing: 0.05rem;
    }

    body,
    input,
    button,
    textarea,
    select {
        font-family: ${({ theme }) => theme.fontFamily.primary};
        font-weight: 400;
        font-size: 1.6rem;
        color: ${(props) => props.theme.colors.fonts[100]};
    }

    button {
        border: none;
        outline: none;
    }

    img {
        display: block;
    }

    ul {
        list-style: none;
    }

    a,
    a:link,
    a:visited {
        text-decoration: none;
    }

    .constraint {
        max-width: 90%;
        margin: 0 auto;;
    } 
`;
