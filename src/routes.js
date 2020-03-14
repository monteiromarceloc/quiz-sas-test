import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { setShowModal } from './store/MainReducer';

import {
  Header,
  AppContent,
  AnswerModal
} from './components'

import {
  HomePage,
  QuestionPage
} from './pages'

function App(props){
  const { showModal, dispatch } = props
  return( <>
    <Header title='Test Dev Frontend' />
    <AppContent>
      <Switch>
        <Route exact path='/'><HomePage/></Route>
        <Route exact path='/question'><QuestionPage/></Route>
      </Switch>
    </AppContent>
    <AnswerModal
      visible={showModal}
      onHide={() => dispatch(setShowModal(false))}
      correct={true} // TODO: show real answer
    />
  </>)
}

const mapStateToProps = ({ MainReducer }) => ({
  showModal: MainReducer.showModal,
});

export default connect(mapStateToProps)(App);
