import React, { useState } from 'react';
import {connect} from 'react-redux'
import wrongIcon from '../../assets/cross.png'
import correctIcon from '../../assets/tick.png'
import Modal from '@material-ui/core/Modal';
import { ModalDialog, ModalIcon, ModalLabel, ModalBox } from './style';
import BasicButton from '../BasicButton';
import { setShowModal, finishGame, setLastAnswer } from '../../store/MainReducer'
import { setShowResults } from '../../store/ResultsReducer'
import { QuizService } from '../../services/api';

function AnswerModal(props) {
  const { correct, visible, questionCounter, lastAnswer, difficulty, selectedCategory, dispatch } = props
  const [loading, setLoading] = useState(false)

  const onHide = () => {
    dispatch(setShowModal(false))
  }

  const handleNext = async () => {
    setLoading(true)
    if (questionCounter < 10){
      // Change difficulty
      let diff = difficulty.slice(0)
      if (correct && lastAnswer === 'c'){
        if (diff === 'easy') diff = 'medium'
        else if (diff === 'medium') diff = 'hard'
        dispatch(setLastAnswer(''))
      } else if (correct === false && lastAnswer === 'w'){
        if (diff === 'medium') diff = 'easy'
        else if (diff === 'hard') diff = 'medium'
        dispatch(setLastAnswer(''))
      } else {
        dispatch(setLastAnswer(correct ? 'c' : 'w'))
      }
      await QuizService.getQuestion(dispatch)(selectedCategory.id, diff)
    } else {
      dispatch(finishGame())
      dispatch(setShowResults())
    }
    setLoading(false)
    onHide()
  }

  return (
    <div>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={visible}
        onClose={handleNext}
      >
        <ModalBox correct={correct}>
          <ModalDialog>
            <ModalIcon src={correct ? correctIcon : wrongIcon} resizeMode='contain' />
            <ModalLabel>{`Você ${correct ? 'acertou' : 'errou'}!`}</ModalLabel>
            <BasicButton label='Avançar' icon onClick={handleNext} loading={loading}/>
          </ModalDialog>
        </ModalBox>
      </Modal>
    </div>
  );
}


const mapStateToProps = ({ MainReducer }) => ({
  lastAnswer: MainReducer.lastAnswer,
  correct: MainReducer.didHit,
  visible: MainReducer.showModal,
  questionCounter: MainReducer.questionCounter,
  selectedCategory: MainReducer.selectedCategory,
  difficulty: MainReducer.currentQuestion[0]?.difficulty,
});

export default connect(mapStateToProps)(AnswerModal);