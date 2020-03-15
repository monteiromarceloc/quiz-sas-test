import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import format from 'date-fns/format'

import { ScreenTitle, SimpleText, CloseText, AnswerContainer, PageContainer, QuestionContainer, RowContainer, CloseButton, CloseIcon } from './style';
import { BasicButton, SASLoading } from '../../components'
import { formatText } from '../../utils';
import closeimg from '../../assets/x-circle.png'
import { setShowModal, finishGame } from '../../store/MainReducer';
import { pushAnswerLog, reset } from '../../store/ResultsReducer';

function QuestionPage(props) {
  const { dispatch, currentQuestion, questionCounter, selectedCategory, showingResults } = props
  
  const [allAnswers, setAllAnswers] = useState([])
  const [correctAnswer, setCorrectAnswer] = useState(-1)
  const [selectedAnswer, setSelectedAnswer] = useState(-1)

  useEffect(()=>{
    // Format question
    if(currentQuestion) {
      const { correct_answer, incorrect_answers } = currentQuestion
      const newAnswers = [...incorrect_answers]
      const index = Math.floor(Math.random() * (newAnswers.length+1))
      newAnswers.splice(index, 0, correct_answer)
      setCorrectAnswer(index)
      setAllAnswers(newAnswers)
      // TODO: convert ASCII Codes
    }
  },[currentQuestion])

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

  const handleClose = () => {
    dispatch(finishGame())
    dispatch(reset())
  }

  if (showingResults || questionCounter > 10) return <Redirect to='/results' />
  if (questionCounter === 0) return <Redirect to='/' />
  if (!currentQuestion) return <SASLoading />

  const { question, difficulty } = currentQuestion
  // TODO: difficulty component

  return (
    <PageContainer>
      <RowContainer>
        <ScreenTitle>{selectedCategory.name}</ScreenTitle>           
        <CloseText>{correctAnswer}</CloseText>           
        <CloseButton onClick={handleClose}>
          <CloseIcon src={closeimg} resizeMode='contain' />
          <CloseText>Fechar</CloseText>           
        </CloseButton>
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
                key={index}  
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
  showingResults: ResultsReducer.showingResults,
});

export default connect(mapStateToProps)(QuestionPage);
