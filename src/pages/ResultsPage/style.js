import styled from 'styled-components'
import { Label } from '../../theme/globalStyle'

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
`

export const ResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 0px;
  width: calc(100% - 64px);
  background-color: ${({theme}) => theme.color.white};
  border: 1px solid ${({theme}) => theme.color.background};
  border-radius: 8px;
  box-shadow: 0px 1px 4px rgba(52, 60, 88, 0.4);
`

export const ResultsHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 0px;
  width: 100%;
  background-color: ${({theme}) => theme.color.secondary};
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`

export const CustomLabel = styled(Label)`
  font-size: ${({theme, size}) => theme.fontSize[size || 'xs']};
  color: ${({theme, white}) => white ? theme.color.white : undefined };
  font-weight: ${({bold}) => bold ? 600 : undefined};
  margin: 0;
`

export const HeaderImg = styled.img`
  height: 115px;
  margin: 50px 25px;
`