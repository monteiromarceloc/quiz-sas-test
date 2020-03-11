import styled from 'styled-components'
import { Label } from '../../theme/globalStyle'

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
`

export const ItemsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 32px;
`

export const ScreenTitle = styled(Label)`
  font-size: ${({theme}) => theme.fontSize.xxl};
  font-weight: 500;
`