import styled from 'styled-components'
import { Label } from '../../theme/globalStyle'

export const ButtonContainer = styled.button`
  display: flex;
  flex-direction: column-reverse;
  justify-content: ${({isLoading}) => isLoading ? 'center' : 'flex-start'};
  align-items: ${({isLoading}) => isLoading ? 'center' : undefined};
  margin: 12px;
  height: 104px;
  width: 200px;
  min-width: 160px;
  background-color: ${({theme}) => theme.color.white};
  border: 1px solid ${({theme}) => theme.color.background};
  border-radius: 8px;
  box-shadow: 0px 1px 4px rgba(52, 60, 88, 0.4);
  outline: none;
  cursor: pointer;
`

export const ButtonLabel = styled(Label)`
  display: flex;
  align-self: flex-end;
  margin: 16px;
  font-weight: 500;
`