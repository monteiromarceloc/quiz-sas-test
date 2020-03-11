import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto');
  body {
    padding: 0;
    margin: 0;
    font-family: Roboto, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`

export const theme = {
  colors: {
    primary: '#FFFFFF',
    background: '#E5E5E5',
    header: '#343C58',
    text: '#1E2124',
  }
}