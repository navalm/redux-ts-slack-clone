import {createGlobalStyle} from 'styled-components';
import Theme from './theme';

const GlobalStyle = createGlobalStyle`
  html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: ${Theme.fonts.size};
    font-weight: normal;
    width: 100%;
    overflow: hidden;
    min-height: 100%;
    box-sizing: border-box;
  }
  body {
    padding: 0 !important;
    margin: 0 !important;
    font-family: ${Theme.fonts.base};
  }
  #root {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  main {
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100vh;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: 0;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default GlobalStyle;