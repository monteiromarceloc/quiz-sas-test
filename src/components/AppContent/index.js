import React from 'react';
import { Background, PageContent } from './style'

function AppContent({ children }) {
  return (
    <Background>
      <PageContent>{children}</PageContent>
    </Background>
  );
}

export default AppContent;
