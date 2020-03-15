import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { PageContainer, QuestionContainer } from './style';


function QuestionPage(props) {

  return (
    <PageContainer>
      <QuestionContainer>
          Parabéns!
      </QuestionContainer>
    </PageContainer>
  );
}

const mapStateToProps = ({ MainReducer }) => ({
  selectedCategory: MainReducer.selectedCategory,
});

export default connect(mapStateToProps)(QuestionPage);
