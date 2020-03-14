import styled from 'styled-components'

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: rgba(30, 33, 36, 0.5);
`

export const ModalBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 90%;
  max-width: 1000px;
`

// TODO: responsive width