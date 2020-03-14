import React from 'react';
import { ButtonContainer, ButtonLabel } from './style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

function BasicButton({onClick, label='Button', icon}) {
  return (
    <ButtonContainer onClick={onClick} icon={icon}>
      <ButtonLabel>{label}</ButtonLabel>
      {
        icon && <FontAwesomeIcon icon={faArrowRight} color='white' size='lg' />
      }
    </ButtonContainer>
  );
}

export default BasicButton;
