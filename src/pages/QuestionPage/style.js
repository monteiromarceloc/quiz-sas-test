import styled from 'styled-components'

export const PageContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-content: center;
  align-items: center;
  `

export const PageContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: flex-start;
  align-items: flex-start;
  max-width: 1000px;
  margin-left: 8%;
`

export const ItemsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 90%;
  margin-bottom: 32px;
`