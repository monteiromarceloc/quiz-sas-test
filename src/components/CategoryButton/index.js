import React from 'react';
import { ButtonContainer, ButtonLabel } from './style'

function CategoryButton({onClick, label='Button'}) {
  return (
    <ButtonContainer onClick={onClick}>
      <ButtonLabel>{label}</ButtonLabel>
    </ButtonContainer>
  );
}

export default CategoryButton;
