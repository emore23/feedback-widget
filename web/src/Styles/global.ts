import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border: none;
  }

  body {
    background: #09090A;
    font-size: 14px;
    color: white;
    font-family: sans-serif, Inter;
  }
`;