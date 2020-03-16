import React from 'react';
import { ButtonContainer, ButtonLabel } from './style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import SASLoading from '../SASLoading';

function BasicButton(props) {
  const { onClick, label='Button', icon, loading, disabled } = props
  return (
    <ButtonContainer onClick={onClick} icon={icon && !loading} isDisabled={disabled} disabled={loading || disabled}>
      {
        loading ? <SASLoading small />
        : <>
          <ButtonLabel>{label}</ButtonLabel>
          {
            icon && <FontAwesomeIcon icon={faArrowRight} color='white' size='lg' />
          }
        </>
      }
    </ButtonContainer>
  );
}

export default BasicButton;
