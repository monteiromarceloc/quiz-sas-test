import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Header } from './components'
import {
  HomePage,
} from './pages'

function App(){
  return( <>
    <Header title='Test Dev Frontend' />
    <Switch>
      <Route exact path='/'><HomePage/></Route>
    </Switch>
  </>)
}

export default App
