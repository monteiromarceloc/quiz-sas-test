import styled from 'styled-components'
import { Label } from '../../theme/globalStyle'

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
`

export const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: ${({justify}) => justify || 'space-between'};
  align-items: center;
`

export const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 0px;
  width: calc(100% - 64px);
  background-color: ${({theme}) => theme.color.white};
  border: 1px solid ${({theme}) => theme.color.background};
  border-radius: 8px;
  box-shadow: 0px 1px 4px rgba(52, 60, 88, 0.4);
  padding: 12px 32px;
`

export const AnswerContainer = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 0px;
  width: calc(100% - 32px);
  background-color: ${({theme}) => theme.color.white};
  border: ${({theme, highlight}) => highlight ? `3px solid ${theme.color.primary}` : `1px solid ${theme.color.background}`};
  border-radius: 8px;
  box-shadow: 0px 1px 2px rgba(52, 60, 88, 0.4);
  padding: 0px 16px;
  margin-bottom: 16px;
  outline: none;
  cursor: pointer;
`

export const ScreenTitle = styled(Label)`
  font-size: ${({theme}) => theme.fontSize.lg};
  font-weight: 500;
`

export const SimpleText = styled(Label)`
  font-size: ${({theme, size}) => theme.fontSize[size || 'sm']};
  color: ${({color}) => color || undefined };
  font-weight: ${({bold}) => bold ? 600 : undefined};
`

export const CloseText = styled(Label)`
  font-size: ${({theme, size}) => theme.fontSize.xs};
  font-weight: 500;
  color: ${({theme}) => theme.color.gray};
`

export const CloseButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0px;
  width: 75px;
  background-color: transparent;
  border: 0;
  outline: none;
  cursor: pointer;
`

export const CloseIcon = styled.img`
  height: 20px;
  margin-right: 6px;
`