import React from 'react';
import wrongIcon from '../../assets/wrong.png'
import correctIcon from '../../assets/correct.png'
import Modal from '@material-ui/core/Modal';
import { ModalDialog, ModalIcon, ModalLabel, ModalBox } from './style';
import BasicButton from '../BasicButton';

export default function AnswerModal(props) {
  const { visible, onHide, correct } = props

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
            <ModalLabel>Você errou!</ModalLabel>
            <BasicButton label='Avançar' icon/>
          </ModalDialog>
        </ModalBox>
      </Modal>
    </div>
  );
}
