import styled from 'styled-components'
import { Label } from '../../theme/globalStyle'

export const ButtonContainer = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 12px;
  height: 44px;
  min-width: 150px;
  max-width: 220px;
  background-color: transparent;
  border: 0;
  outline: none;
  cursor: pointer;
`

export const ButtonLabel = styled(Label)`
  color: ${({theme}) => theme.color.gray};
  margin: 0;
  font-weight: 500;
`

export const FBIcon = styled.img`
  height: 32px;
`