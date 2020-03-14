import styled from 'styled-components'
import { Label } from '../../theme/globalStyle'

export const ButtonContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 12px;
  height: 44px;
  width: 150px;
  background-color: ${({theme}) => theme.color.primary};
  border: 0;
  border-radius: 8px;
  outline: none;
`

export const ButtonLabel = styled(Label)`
  color: ${({theme}) => theme.color.white};
  margin: 0;
  font-weight: 500;
`
