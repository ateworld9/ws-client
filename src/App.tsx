import React, { useContext } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { myContext } from './Context';
import { Homepage } from './components/Homepage/Homepage';
import { LoginPage } from './components/LoginPage/LoginPage';
import { NavBar } from './components/NavBar/NavBar';

import './styles.css';

function App() {
  const userObject = useContext(myContext);

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
