import React, { useContext } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { myContext } from './Context';
import { Homepage } from './components/Homepage';
import { LoginPage } from './components/LoginPage';
import { NavBar } from './components/NavBar';

import './styles.css';

function App() {
  const userObject = useContext(myContext);
  return (
    <BrowserRouter>
      <header>
        <NavBar />
      </header>
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/login" component={LoginPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
