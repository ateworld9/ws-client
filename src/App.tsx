import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Homepage } from './components/Homepage/Homepage';
import { LoginPage } from './components/LoginPage/LoginPage';
import { NavBar } from './components/NavBar/NavBar';

import './styles.css';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/login" component={LoginPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
