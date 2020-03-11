import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  height: auto;
  width: 100%;
  background: ${({theme}) => theme.color.header};
  border: 0;
  margin: 0 0 10px;
`

export const HeaderLabel = styled.h1`
  display: flex;
  color: #fff;
  font-size: 18px;
  margin: 16px;
  align-self: flex-end;
`