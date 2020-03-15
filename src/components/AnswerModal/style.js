import styled from 'styled-components'
import { Label } from '../../theme/globalStyle'

export const ModalBox = styled.div`
  position: absolute;
  width: 328px;
  background-color: #fff;
  border: 3px solid ${({correct}) => correct ? '#32CB82' : '#FF4F4F' };
  border-radius: 8px;
  padding: 30px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
export const ModalDialog = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`

export const ModalIcon = styled.img`
  height: 50px;
  margin-bottom: 14;
`

export const ModalLabel = styled(Label)`
  font-size: ${({theme}) => theme.fontSize.lg};
  font-weight: 500;
  margin-bottom: 18px;
`