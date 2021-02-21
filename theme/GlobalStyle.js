import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  html,
  body {
    height: 100%;
    width: 100%;
    font-family: ${({ theme }) => theme.typography.fontFamily};
    font-size: ${({ theme }) => theme.typography.body1.fontSize};
    line-height: ${({ theme }) => theme.typography.body1.lineHeight};
    color: ${({ theme }) => theme.palette.text.main};
  }

  a {
    text-decoration: none;
    color: inherit;
  }


  a,
  button {
    :focus {
      outline-color: ${({ theme }) => theme.palette.secondary.main};
      outline-offset: 2px;
      outline-width: 2px;
      outline-style: dotted;
    }
  }

  h1 {
    ${({ theme }) => theme.typography.h1}
  }

  h2 {
    ${({ theme }) => theme.typography.h2}
  }

  h3 {
    ${({ theme }) => theme.typography.h3}
  }

  h4 {
    ${({ theme }) => theme.typography.h4}
  }

  h5 {
    ${({ theme }) => theme.typography.h5}
  }

  h6 {
    ${({ theme }) => theme.typography.h6}
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
  }
`;

export default GlobalStyle;
