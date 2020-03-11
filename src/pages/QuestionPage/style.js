import styled from 'styled-components'

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
  justify-content: space-between;
  align-items: center;
`

export const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 0px;
  width: calc(100% - 64px);
  background-color: ${({theme}) => theme.color.primary};
  border: 1px solid ${({theme}) => theme.color.background};
  border-radius: 8px;
  box-shadow: 0px 1px 4px rgba(52, 60, 88, 0.4);
  padding: 12px 32px;
`

export const AnswerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 0px;
  width: calc(100% - 64px);
  background-color: ${({theme}) => theme.color.primary};
  border: 1px solid ${({theme}) => theme.color.background};
  border-radius: 8px;
  box-shadow: 0px 1px 4px rgba(52, 60, 88, 0.4);
  padding: 12px 32px;
`