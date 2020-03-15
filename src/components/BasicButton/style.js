import styled from 'styled-components'
import { Label } from '../../theme/globalStyle'

export const ButtonContainer = styled.button`
  display: flex;
  justify-content: ${({icon}) => icon ? 'space-between' : 'center'};
  align-items: center;
  margin: 12px;
  height: 44px;
  min-width: 150px;
  max-width: 177px;
  padding-left: 24px;
  padding-right: 24px;
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
