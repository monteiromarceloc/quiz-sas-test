import React from 'react';
import { HeaderContainer, HeaderLabel } from './style'

function Header({ title }) {
  return (
    <HeaderContainer>
      <HeaderLabel>{title}</HeaderLabel>
    </HeaderContainer>
  );
}

export default Header;
