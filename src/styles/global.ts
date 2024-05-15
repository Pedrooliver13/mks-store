// Packages
import { createGlobalStyle } from "styled-components";

// Styles
import { Container } from "styles/container";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  :focus {
    outline: 0;
  }

  body {
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors["gray-800"]};
    --webkit-font-smoothing: antialised;
  }
  
  body, input, textarea, button {
    font-weight: 400;
    font-family: ${({ theme }) => theme.fonts.default};
    font-size: ${({ theme }) => theme.textSizes["text-m"]};
  }

  a {
    text-decoration: none !important;
    color: inherit;

  }

  img {
    max-width: 100%;
    position: relative;
    display: inline-block;
    object-fit: contain;
  }

  .container {
    ${Container};
  }
`;
