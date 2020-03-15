import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import { HeaderImg, PageContainer, ResultsContainer, ResultsHeader, CustomLabel } from './style';
import creature from '../../assets/creature.png'
import { reset } from '../../store/ResultsReducer'
import { BasicButton } from '../../components';


function ResultsPage(props) {
  const { dispatch, showingResults } = props

  const handleExit = () => {
    dispatch(reset())
  }

  // if (!showingResults) return <Redirect to='/' />

  return (
    <PageContainer>
      <ResultsContainer>
        <ResultsHeader>
          <HeaderImg src={creature} resizeMode='contain' />
          <div>
            <CustomLabel size='xxl' white>Parabéns!</CustomLabel>
            <CustomLabel size='rg' white>Você finalizou o teste</CustomLabel>
          </div>
        </ResultsHeader>
        <BasicButton label='Voltar ao início' onClick={handleExit} />
      </ResultsContainer>
    </PageContainer>
  );
}

const mapStateToProps = ({ ResultsReducer }) => ({
  showingResults: ResultsReducer.showingResults,
});

export default connect(mapStateToProps)(ResultsPage);
