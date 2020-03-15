import React, { useState } from 'react';
import { ButtonContainer, ButtonLabel } from './style'
import SASLoading from '../SASLoading';

function CategoryButton({onClick, label='Button'}) {
  const [loading, setLoading] = useState(false)
  const handleClick = () => {
    setLoading(true)
    onClick()
  }
  return (
    <ButtonContainer onClick={handleClick} loading={loading}>
      {
        loading ? <SASLoading />
        : <ButtonLabel>{label}</ButtonLabel>
      }
    </ButtonContainer>
  );
}

export default CategoryButton;
