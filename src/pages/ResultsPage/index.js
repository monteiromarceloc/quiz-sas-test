import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import { InfoRow, VerticalDivider, NumbersColumn, GrayContainer, RelativeRow, FloatingHeader, HeaderImg, PageContainer, ResultsContainer, ResultsHeader, CustomLabel } from './style';
import creature from '../../assets/creature.png'
import { reset } from '../../store/ResultsReducer'
import { BasicButton } from '../../components';


function ResultsPage(props) {
  const { dispatch, showingResults, answerLog } = props
  
  const [results, setResults] = useState({})

  useEffect(()=>{
    const EC = answerLog.filter(e => e.difficulty === 'easy' && e.didHit).length
    const EW = answerLog.filter(e => e.difficulty === 'easy' && !e.didHit).length
    const MC = answerLog.filter(e => e.difficulty === 'medium' && e.didHit).length
    const MW = answerLog.filter(e => e.difficulty === 'medium' && !e.didHit).length
    const HC = answerLog.filter(e => e.difficulty === 'hard' && e.didHit).length
    const HW = answerLog.filter(e => e.difficulty === 'hard' && !e.didHit).length
    setResults({EC, EW, MC, MW, HC, HW, AC: EC+MC+HC, AW: EW+MW+HW})
  },[])

  const handleExit = () => {
    dispatch(reset())
  }

  if (!showingResults) return <Redirect to='/' />

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
  <CustomLabel size='xl' bold >{results.AC}</CustomLabel>
            <CustomLabel>acertos</CustomLabel>
          </NumbersColumn>
          <NumbersColumn>
            <CustomLabel size='xl' bold >{results.AW}</CustomLabel>
            <CustomLabel>erros</CustomLabel>
          </NumbersColumn>
        </GrayContainer>

        <InfoRow>
          <div>
            <CustomLabel bold>Fácil</CustomLabel>
            <CustomLabel>Acertos: {results.EC}</CustomLabel>
            <CustomLabel>Erros: {results.EW}</CustomLabel>
          </div>
          <VerticalDivider />
          <div>
            <CustomLabel bold>Médio</CustomLabel>
            <CustomLabel>Acertos: {results.MC}</CustomLabel>
            <CustomLabel>Erros: {results.MW}</CustomLabel>
          </div>
          <VerticalDivider />
          <div>
            <CustomLabel bold>Difícil</CustomLabel>
            <CustomLabel>Acertos: {results.HC}</CustomLabel>
            <CustomLabel>Erros: {results.HW}</CustomLabel>
          </div>
        </InfoRow>
        <BasicButton label='Voltar ao início' onClick={handleExit} />
      </ResultsContainer>
    </PageContainer>
  );
}

const mapStateToProps = ({ ResultsReducer }) => ({
  showingResults: ResultsReducer.showingResults,
  answerLog: ResultsReducer.answerLog,
});

export default connect(mapStateToProps)(ResultsPage);
