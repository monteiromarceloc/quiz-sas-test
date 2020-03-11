import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'

import { QuizService } from '../../services/api'
import { ScreenTitle, SimpleText, CloseText, AnswerContainer, PageContainer, QuestionContainer, RowContainer } from './style';

function QuestionPage(props) {
  const { currentQuestion } = props
  
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
      const index = Math.floor(Math.random() * newAnswers.length)
      newAnswers.splice(index, 0, correct_answer)
      setCorrectAnswer(index)
      setAllAnswers(newAnswers)
      // TODO: convert ASCII Codes
    }
  }

  const handleSelect = (index) => (e) => {
    e.preventDefault()
    setSelectedAnswer(index)
  }

  if (!currentQuestion) return <Redirect to='/' />
  
  const { question, difficulty } = currentQuestion

  return (
    <PageContainer>
      <RowContainer>
        <ScreenTitle>História</ScreenTitle>           
        <CloseText>Fechar</CloseText>           
      </RowContainer>
      <QuestionContainer>
        <RowContainer>
          <SimpleText color='black' bold >Questão 1</SimpleText>       
          <SimpleText size='xxs' bold >Dificil</SimpleText>
        </RowContainer>
          <SimpleText size='sm'>{question}</SimpleText>           
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
      </QuestionContainer>
    </PageContainer>
  );
}

const mapStateToProps = ({ MainReducer }) => ({
  currentQuestion: MainReducer.currentQuestion[0],
});

export default connect(mapStateToProps)(QuestionPage);
