import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import format from 'date-fns/format'
import Loader from 'react-loader-spinner'

import { QuizService } from '../../services/api'
import { ScreenTitle, SimpleText, CloseText, AnswerContainer, PageContainer, QuestionContainer, RowContainer } from './style';
import { BasicButton, SASLoading } from '../../components'
import { formatText } from '../../utils';
import { setShowModal } from '../../store/MainReducer';
import { pushAnswerLog } from '../../store/ResultsReducer';

function QuestionPage(props) {
  const { dispatch, currentQuestion, questionCounter, selectedCategory, lastAnswer, showingResults } = props
  
  const [allAnswers, setAllAnswers] = useState([])
  const [correctAnswer, setCorrectAnswer] = useState(-1)
  const [selectedAnswer, setSelectedAnswer] = useState(-1)

  useEffect(()=>{
    formatQuestion();
  },[currentQuestion])

  const formatQuestion = () => {
    if(currentQuestion) {
      const { correct_answer, incorrect_answers } = currentQuestion
      const newAnswers = [...incorrect_answers]
      const index = Math.floor(Math.random() * (newAnswers.length+1))
      newAnswers.splice(index, 0, correct_answer)
      setCorrectAnswer(index)
      setAllAnswers(newAnswers)
      // TODO: convert ASCII Codes
    }
  }

  const handleSelect = (index) => () => {
    setSelectedAnswer(index)
  }

  const handleAnswer = () => {
    const didHit = correctAnswer === selectedAnswer
    let difficulty = currentQuestion.difficulty
    const payload = {
      difficulty,
      selectedAnswer: allAnswers[selectedAnswer],
      correctAnswer: currentQuestion.correct_answer,
      didHit,
      created_at: format(Date.now(), 'dd/MM/yyyy hh:mm:ss'),
    }
    dispatch(pushAnswerLog(payload))
    dispatch(setShowModal(true, didHit))
    setSelectedAnswer(-1)
  }

  if (showingResults || questionCounter > 10) return <Redirect to='/results' />
  if (!currentQuestion) return <SASLoading />

  const { question, difficulty } = currentQuestion

  return (
    <PageContainer>
      <RowContainer>
        <ScreenTitle>{selectedCategory.name}</ScreenTitle>           
        <CloseText>{correctAnswer}</CloseText>           
        <CloseText>Fechar</CloseText>           
      </RowContainer>
      <QuestionContainer>
        <RowContainer>
          <SimpleText color='black' bold >Questão {questionCounter}</SimpleText>       
          <SimpleText size='xxs' bold >Dificil</SimpleText>
        </RowContainer>
          <SimpleText size='sm'>{formatText( question )}</SimpleText>           
          {
            allAnswers.map((item, index) => 
              <AnswerContainer
                onClick={handleSelect(index)}
                highlight={index === selectedAnswer}  
              >
                <SimpleText size='sm'>{item}</SimpleText>
              </AnswerContainer>
            )
          }
          <RowContainer justify='center'>
            <BasicButton label='Responder' onClick={handleAnswer} disabled={selectedAnswer === -1}/>
          </RowContainer>
      </QuestionContainer>
    </PageContainer>
  );
}

const mapStateToProps = ({ MainReducer, ResultsReducer }) => ({
  currentQuestion: MainReducer.currentQuestion[0],
  questionCounter: MainReducer.questionCounter,
  selectedCategory: MainReducer.selectedCategory,
  lastAnswer: MainReducer.lastAnswer,
  showingResults: ResultsReducer.showingResults,
});

export default connect(mapStateToProps)(QuestionPage);
