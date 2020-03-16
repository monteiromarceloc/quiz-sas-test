import React from 'react';
import { ButtonContainer, ButtonLabel, FBIcon } from './style'
import fblogo from '../../assets/firebase.png'
import SASLoading from '../SASLoading';

function FBButton(props) {
  const { onClick, label='Savar resultado', loading, disabled } = props
  return (
    <ButtonContainer onClick={onClick} disabled={disabled || loading}>
      {
        loading ? <SASLoading small />
        : <>
          <FBIcon src={fblogo} resizeMode='contain' />
          <ButtonLabel>{label}</ButtonLabel>
        </>
      }
    </ButtonContainer>
  );
}

export default FBButton;
