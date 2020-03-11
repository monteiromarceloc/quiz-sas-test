import styled from 'styled-components'
import { Label } from '../../theme/globalStyle'

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

export const HeaderLabel = styled(Label)`
  display: flex;
  align-self: flex-end;
  color: ${({theme}) => theme.color.white};
  font-weight: 600;
  margin: 16px;
`