import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  :root {
    --site-color: royalblue;
    --divider-color: rgba(0, 0, 0, 0.4);
  }

  html {
    font: 100%/1.5 system-ui;
    background-color: rgb(23, 25, 35);
    color: rgb(255, 255, 255);
  }

  a {
    color: inherit;
    text-decoration-color: var(--divider-color);
    text-decoration-thickness: 2px;
  }

  a:hover {
    color: var(--site-color);
    text-decoration-color: currentcolor;
  }

  h1 {
    font-size: 48px;
  }

  h1,
  p {
    margin-bottom: 1.5rem;
  }

  code {
    font-family: 'Menlo';
  }

  .wrapper {
    max-width: 768px;
    margin: 0 auto;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
`;
