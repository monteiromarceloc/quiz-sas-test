import styled from 'styled-components'

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({theme}) => theme.color.background};
`

export const PageContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 90%;
  max-width: 1000px;
  @media (max-width: 996px) {
    max-width: 800px;
  }
  @media (max-width: 750px) {
    max-width: 500px;
  }
  @media (max-width: 450px) {
    width: 100%;
  }
`
