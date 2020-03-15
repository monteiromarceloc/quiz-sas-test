import styled from "styled-components";

export const theme = {
  color: {
    primary: '#0467DB',
    secondary: '#438DE4',
    background: '#E5E5E5',
    header: '#343C58',
    text: '#1E2124',
    white: '#FFFFFF',
    gray: '#53595F',
  },
  fontSize: {
    xxl: '36px',
    xl: '28px',
    lg: '24px',
    rg: '18px',
    sm: '16px',
    xs: '14px',
    xxs: '12px',
  }
}

// responsive https://jsramblings.com/how-to-use-media-queries-with-styled-components/
// TODO: font-family Avenir

export const Label = styled.p`
  color: ${({theme}) => theme.color.text};
  font-size: ${theme.fontSize.rg};
  text-align: left;
`