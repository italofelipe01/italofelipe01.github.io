import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    transition: all 0.25s linear;
    width: 100%;
    min-height: 100%;
    overflow-x: clip;
  }

  #root {
    width: 100%;
    min-height: 100vh;
  }

  img,
  svg {
    max-width: 100%;
  }
`;
