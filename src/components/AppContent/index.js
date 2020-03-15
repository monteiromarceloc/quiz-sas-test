import React from 'react';
import { Background, PageContent } from './style'
import Header from '../Header'

function AppContent({ children }) {
  return (
    <Background>
      <Header title='Test Dev Frontend' />
      <PageContent>{children}</PageContent>
    </Background>
  );
}

export default AppContent;
