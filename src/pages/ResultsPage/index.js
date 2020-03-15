import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import { InfoRow, VerticalDivider, NumbersColumn, GrayContainer, RelativeRow, FloatingHeader, HeaderImg, PageContainer, ResultsContainer, ResultsHeader, CustomLabel } from './style';
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
        <RelativeRow>
          <FloatingHeader>
            <CustomLabel bold >Veja seu desempenho nas questões</CustomLabel>
          </FloatingHeader>
        </RelativeRow>

        <GrayContainer>
          <NumbersColumn>
            <CustomLabel size='xl' bold >7</CustomLabel>
            <CustomLabel>acertos</CustomLabel>
          </NumbersColumn>
          <NumbersColumn>
            <CustomLabel size='xl' bold >3</CustomLabel>
            <CustomLabel>erros</CustomLabel>
          </NumbersColumn>
        </GrayContainer>

        <InfoRow>
          <div>
            <CustomLabel bold>Fácil</CustomLabel>
            <CustomLabel>Acertos: 2</CustomLabel>
            <CustomLabel>Erros: 1</CustomLabel>
          </div>
          <VerticalDivider />
          <div>
            <CustomLabel bold>Médio</CustomLabel>
            <CustomLabel>Acertos: 2</CustomLabel>
            <CustomLabel>Erros: 1</CustomLabel>
          </div>
          <VerticalDivider />
          <div>
            <CustomLabel bold>Difícil</CustomLabel>
            <CustomLabel>Acertos: 2</CustomLabel>
            <CustomLabel>Erros: 1</CustomLabel>
          </div>
        </InfoRow>
        <BasicButton label='Voltar ao início' onClick={handleExit} />
      </ResultsContainer>
    </PageContainer>
  );
}

const mapStateToProps = ({ ResultsReducer }) => ({
  showingResults: ResultsReducer.showingResults,
});

export default connect(mapStateToProps)(ResultsPage);
