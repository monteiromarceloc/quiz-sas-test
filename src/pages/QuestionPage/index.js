import React, { useState, useEffect } from 'react';
import { QuizService } from '../../services/api'
import { PageContainer, QuestionContainer, RowContainer } from './style';
import { Label } from '../../theme/globalStyle';

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
        <Label>História</Label>           
        <Label>Fechar</Label>           
      </RowContainer>
      {
        load &&
        <QuestionContainer>
          <RowContainer>
            <Label>Questão 1</Label>       
            <Label>Dificil</Label>
          </RowContainer>
            <Label>{questions[currentIndex].question}</Label>           
            {
              allAnswers.map(e => <Label>{e}</Label>)
            }
        </QuestionContainer>
      }
    </PageContainer>
  );
}

export default QuestionPage;
