import React, { useState, useEffect } from 'react';
import { QuizService } from '../../services/api'
import { ScreenTitle, SimpleText, CloseText,  PageContainer, QuestionContainer, RowContainer } from './style';

function QuestionPage() {

  const [questions, setQuestions] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [allAnswers, setAllAnswers] = useState([])
  const [correctAnswer, setCorrectAnswer] = useState(-1)
  const [load, setLoad] = useState(false)

  useEffect(()=>{
    fetchQuestions();
  },[])

  useEffect(()=>{
    nextQuestion();
  },[questions, currentIndex])

  const fetchQuestions = async () => {
    const data = await QuizService.getQuestions()
    setQuestions(data);
  }

  const nextQuestion = () => {
    if(questions && questions.length > 0) {
      setLoad(false)
      const currQuest = questions[currentIndex]
      console.log(currQuest)
      const newAnswers = [...currQuest.incorrect_answers]
      const index = Math.floor(Math.random() * newAnswers.length)
      newAnswers.splice(index, 0, currQuest.correct_answer)
      setCorrectAnswer(index)
      setAllAnswers(newAnswers)
      setLoad(true)
    }
  }

  return (
    <PageContainer>
      <RowContainer>
        <ScreenTitle>História</ScreenTitle>           
        <CloseText>Fechar</CloseText>           
      </RowContainer>
      {
        load &&
        <QuestionContainer>
          <RowContainer>
            <SimpleText color='black' bold >Questão 1</SimpleText>       
            <SimpleText size='xxs' bold >Dificil</SimpleText>
          </RowContainer>
            <SimpleText size='sm'>{questions[currentIndex].question}</SimpleText>           
            {
              allAnswers.map(e => <SimpleText size='sm'>{e}</SimpleText>)
            }
        </QuestionContainer>
      }
    </PageContainer>
  );
}

export default QuestionPage;
