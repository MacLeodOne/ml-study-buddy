import { createGlobalStyle } from 'styled-components';
import {} from './fonts.css';

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
     
  }
  
  *, *::after, *::before {
    box-sizing: inherit;
  }
  
  body {
    font-family: 'Montserrat', sans-serif;
  }
  
  a, button {
    font-family: 'Montserrat', sans-serif;
  }
`;
