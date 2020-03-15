import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {
  AppContent,
  AnswerModal
} from './components'

import {
  HomePage,
  QuestionPage,
  ResultsPage,
} from './pages'

function App(){
  return <AppContent>
      <Switch>
        <Route exact path='/'><HomePage/></Route>
        <Route exact path='/question'><QuestionPage/></Route>
        <Route exact path='/results'><ResultsPage/></Route>
      </Switch>
    <AnswerModal />
  </AppContent>
}

export default App;
