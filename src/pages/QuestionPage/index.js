import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'

import { QuizService } from '../../services/api'
import { ScreenTitle, SimpleText, CloseText, AnswerContainer, PageContainer, QuestionContainer, RowContainer } from './style';
import { BasicButton } from '../../components'
import { formatText } from '../../utils';
import { setShowModal } from '../../store/MainReducer';

function QuestionPage(props) {
  const { dispatch, currentQuestion, questionCounter, selectedCategory, lastAnswer } = props
  
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

  const handleAnswer = (e) => {
    e.preventDefault()
    const didHit = correctAnswer === selectedAnswer
    let difficulty = currentQuestion.difficulty
    dispatch(setShowModal(true, didHit))

    // Change difficulty
    if (didHit && lastAnswer === 'c'){
      if (difficulty === 'easy') difficulty = 'medium'
      if (difficulty === 'medium') difficulty = 'hard'
    } else if (!didHit && lastAnswer === 'w'){
      if (difficulty === 'medium') difficulty = 'easy'
      if (difficulty === 'hard') difficulty = 'medium'
    }
    console.log(difficulty)
    
    // Preloads question so that next question is ready
    QuizService.getQuestion(dispatch)(selectedCategory.id, difficulty)
    setSelectedAnswer(-1)
  }

  if (!currentQuestion) return <Redirect to='/' />
  
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
            <BasicButton label='Responder' onClick={handleAnswer}/>
          </RowContainer>
      </QuestionContainer>
    </PageContainer>
  );
}

const mapStateToProps = ({ MainReducer }) => ({
  currentQuestion: MainReducer.currentQuestion[0],
  questionCounter: MainReducer.questionCounter,
  selectedCategory: MainReducer.selectedCategory,
  lastAnswer: MainReducer.lastAnswer,
});

export default connect(mapStateToProps)(QuestionPage);
