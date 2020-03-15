import React from 'react';
import {connect} from 'react-redux'
import wrongIcon from '../../assets/cross.png'
import correctIcon from '../../assets/tick.png'
import Modal from '@material-ui/core/Modal';
import { ModalDialog, ModalIcon, ModalLabel, ModalBox } from './style';
import BasicButton from '../BasicButton';
import { setShowModal, pushQuestion, finishGame } from '../../store/MainReducer'
import { setShowResults } from '../../store/ResultsReducer'

function AnswerModal(props) {
  const { correct, visible, questionCounter, dispatch } = props

  const onHide = () => dispatch(setShowModal(false))

  const handleNext = () => {
    if (questionCounter < 3) dispatch(pushQuestion())
    else {
      dispatch(finishGame())
      dispatch(setShowResults())
    }
    onHide()
  }

  return (
    <div>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={visible}
        onClose={onHide}
      >
        <ModalBox correct={correct}>
          <ModalDialog>
            <ModalIcon src={correct ? correctIcon : wrongIcon} resizeMode='contain' />
            <ModalLabel>{`Você ${correct ? 'acertou' : 'errou'}!`}</ModalLabel>
            <BasicButton label='Avançar' icon onClick={handleNext}/>
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
});

export default connect(mapStateToProps)(AnswerModal);