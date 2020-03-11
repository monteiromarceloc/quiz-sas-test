import React, { useState, useEffect } from 'react';
import { QuizService } from '../../services/api'
import { ScreenTitle, SimpleText, CloseText, AnswerContainer, PageContainer, QuestionContainer, RowContainer } from './style';

function QuestionPage() {

  const [questions, setQuestions] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [allAnswers, setAllAnswers] = useState([])
  const [correctAnswer, setCorrectAnswer] = useState(-1)
  const [selectedAnswer, setSelectedAnswer] = useState(-1)
  const [questionText, setQuestionText] = useState(-1)
  const [load, setLoad] = useState(false)

  useEffect(()=>{
    fetchQuestions();
  },[])

  useEffect(()=>{
    nextQuestion();
  },[questions, currentIndex])

  const fetchQuestions = async () => {
    // const data = await QuizService.getQuestion()()
    // setQuestions(data);
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
      // TODO: convert ASCII Codes
      const decoded = decodeURI(currQuest.question)
      setQuestionText(decoded)
      setLoad(true)
    }
  }

  const handleSelect = (index) => (e) => {
    e.preventDefault()
    setSelectedAnswer(index)
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
            <SimpleText size='sm'>{questionText}</SimpleText>           
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
      }
    </PageContainer>
  );
}

export default QuestionPage;
