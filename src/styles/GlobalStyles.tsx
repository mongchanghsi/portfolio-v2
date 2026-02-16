import { createGlobalStyle } from "styled-components";
import theme from "./theme";

const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    max-width: 100vw;
    min-height: 100vh;
    min-height: 100dvh;
    overflow-x: hidden;

    background: ${theme.colors.base};

    cursor: none;

    /* width */
    &::-webkit-scrollbar {
      width: 10px;
    }

    /* Track */
    &::-webkit-scrollbar-track {
      background: transparent;
      box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 20px;
      border: 10px solid transparent;
    }

    /* Handle */
    &::-webkit-scrollbar-thumb {
      box-shadow: inset 0 0 14px 14px black;
      border-radius: 20px;

      border: 3px solid transparent;
    }
  }

  html {
    scroll-behavior: smooth;
  }

  a {
    text-decoration-line: none !important;
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;

    &::-moz-selection { /* Code for Firefox */
      background: #2e2e2e;
    }

    &::selection {
      background: #2e2e2e;
    }
  }

  .stopAnimation * {
    -webkit-transition: none !important;
    -moz-transition: none !important;
    -ms-transition: none !important;
    -o-transition: none !important;
  }

`;

export default GlobalStyle;
