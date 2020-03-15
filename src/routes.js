import React from 'react';
import { Route, Switch } from 'react-router-dom';

import {
  Header,
  AppContent,
  AnswerModal
} from './components'

import {
  HomePage,
  QuestionPage,
  ResultsPage,
} from './pages'

function App(props){
  const { showModal, dispatch } = props
  return( <>
    <Header title='Test Dev Frontend' />
    <AppContent>
      <Switch>
        <Route exact path='/'><HomePage/></Route>
        <Route exact path='/question'><QuestionPage/></Route>
        <Route exact path='/results'><ResultsPage/></Route>
      </Switch>
    </AppContent>
    <AnswerModal />
  </>)
}


export default App;
