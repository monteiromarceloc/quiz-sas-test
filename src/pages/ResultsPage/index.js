import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import { InfoRow, VerticalDivider, NumbersColumn, GrayContainer, RelativeRow, FloatingHeader, HeaderImg, PageContainer, ResultsContainer, ResultsHeader, CustomLabel } from './style';
import creature from '../../assets/creature.png'
import { reset } from '../../store/ResultsReducer'
import { BasicButton, FBButton } from '../../components';
import fb from '../../services/firebaseCredentials'

function ResultsPage(props) {
  const { dispatch, showingResults, answerLog } = props
  
  const [results, setResults] = useState({})

  useEffect(()=>{
    // Formating results
    let res = {easy:{},medium:{},hard:{}}
    answerLog.map(e => {
      res[e.difficulty][e.didHit ? 'correct' : 'wrong'] = (res[e.difficulty][e.didHit ? 'correct' : 'wrong'] + 1) || 1 
      res[e.didHit ? 'correct' : 'wrong'] = (res[e.didHit ? 'correct' : 'wrong'] + 1) || 1
      return true;
    })
    setResults(res)
  },[answerLog])

  const handleExit = () => {
    dispatch(reset())
  }

  const handleSave = () => {

    // Check if user is authenticated
    const user = fb.auth().currentUser;
    if (user != null) {
      const uid = user.uid;
      const key = fb.database().ref('users/' + uid).push().key
      fb.database().ref('users/' + uid + '/history/' + key).set(results);
    } else {
      
      // Authenticates user
      const provider = new fb.auth.GoogleAuthProvider();
      fb.auth().signInWithPopup(provider).then(function(result) {
        const { uid } = result.user;
        const key = fb.database().ref('users/' + uid).push().key
        fb.database().ref('users/' + uid + '/history/' + key).set(results);
      
      }).catch(function(error) {
        console.log('Fb auth error: ', error)
      });
    }
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
            <CustomLabel size='xl' bold >{results.correct || 0}</CustomLabel>
            <CustomLabel>acertos</CustomLabel>
          </NumbersColumn>
          <NumbersColumn>
            <CustomLabel size='xl' bold >{results.wrong || 0}</CustomLabel>
            <CustomLabel>erros</CustomLabel>
          </NumbersColumn>
        </GrayContainer>

        <InfoRow>
          <div>
            <CustomLabel bold>Fácil</CustomLabel>
            <CustomLabel>Acertos: {results.easy?.correct || 0}</CustomLabel>
            <CustomLabel>Erros: {results.easy?.wrong || 0}</CustomLabel>
          </div>
          <VerticalDivider />
          <div>
            <CustomLabel bold>Médio</CustomLabel>
            <CustomLabel>Acertos: {results.medium?.correct || 0}</CustomLabel>
            <CustomLabel>Erros: {results.medium?.wrong || 0}</CustomLabel>
          </div>
          <VerticalDivider />
          <div>
            <CustomLabel bold>Difícil</CustomLabel>
            <CustomLabel>Acertos: {results.hard?.correct || 0}</CustomLabel>
            <CustomLabel>Erros: {results.hard?.wrong || 0}</CustomLabel>
          </div>
        </InfoRow>
        <BasicButton label='Voltar ao início' onClick={handleExit} />
        <FBButton onClick={handleSave} />
      </ResultsContainer>
    </PageContainer>
  );
}

const mapStateToProps = ({ ResultsReducer }) => ({
  showingResults: ResultsReducer.showingResults,
  answerLog: ResultsReducer.answerLog,
});

export default connect(mapStateToProps)(ResultsPage);
