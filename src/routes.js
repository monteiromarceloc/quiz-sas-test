import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Header, AppContent } from './components'
import {
  HomePage,
  QuestionPage
} from './pages'

function App(){
  return( <>
    <Header title='Test Dev Frontend' />
    <AppContent>
      <Switch>
        <Route exact path='/'><HomePage/></Route>
        <Route exact path='/question'><QuestionPage/></Route>
      </Switch>
    </AppContent>
  </>)
}

export default App
