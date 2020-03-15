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
  align-items: center;
  margin-top: 0px;
  width: calc(100% - 64px);
  background-color: ${({theme}) => theme.color.white};
  border: 1px solid ${({theme}) => theme.color.background};
  border-radius: 8px;
  box-shadow: 0px 1px 4px rgba(52, 60, 88, 0.4);
  margin: 72px 0px;
  padding-bottom: 15px;
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
  color: ${({theme, white}) => theme.color[white ? 'white' : 'header'] };
  font-weight: ${({bold}) => bold ? 600 : undefined};
  margin: 0;
`

export const HeaderImg = styled.img`
  height: 115px;
  margin: 50px 25px;
`

export const RelativeRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: -18px;
  width: 100%;
`

export const FloatingHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35px;
  width: 260px;
  background-color: ${({theme}) => theme.color.white};
  border: 0px;;
  border-radius: 8px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

export const GrayContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  background-color: rgba(52, 60, 88, 0.08);
  border: 0px;
  border-radius: 10px;
  margin: 35px;
`

export const NumbersColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 6px 33px;
`

export const InfoRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
`

export const VerticalDivider = styled.div`
  height: 52px;
  width: 0px;
  border: 1px solid rgba(52, 60, 88, 0.08);
  margin: 0px 40px;
`