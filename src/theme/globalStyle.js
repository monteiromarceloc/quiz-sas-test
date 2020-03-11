import styled, { createGlobalStyle } from "styled-components";

export const theme = {
  color: {
    primary: '#FFFFFF',
    background: '#E5E5E5',
    header: '#343C58',
    text: '#1E2124',
  },
  fontSize: {
    xbig: '44px',
    big: '24px',
    regular: '18px',
    small: '16px',
    xsmall: '14px',
  },
}

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto');
  body {
    padding: 0;
    margin: 0;
    background-color: ${theme.color.background};
    font-family: Roboto, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`

export const BigLabel = styled.h1`
  color: ${theme.color.text};
  font-size: ${theme.fontSize.xbig};
  margin: 26;
  font-weight: 550;
`

export const Label = styled.p`
  color: ${theme.color.text};
  font-size: ${theme.fontSize.regular};
  font-weight: 600;
`