import React from 'react';
import {connect} from 'react-redux'
import wrongIcon from '../../assets/wrong.png'
import correctIcon from '../../assets/correct.png'
import Modal from '@material-ui/core/Modal';
import { ModalDialog, ModalIcon, ModalLabel, ModalBox } from './style';
import BasicButton from '../BasicButton';
import { setShowModal } from '../../store/MainReducer'

function AnswerModal(props) {
  const { correct, visible, dispatch } = props

  const onHide = () => dispatch(setShowModal(false))

  const handleNext = () => {
    // set PreLoadToCurrent
    // set new lastAnswer
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
});

export default connect(mapStateToProps)(AnswerModal);