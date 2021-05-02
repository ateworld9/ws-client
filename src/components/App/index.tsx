import { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import axios, { AxiosResponse } from 'axios';

import { fetchUserById } from 'store';
import { useAppDispatch } from 'hooks';

import { NavBar } from '../NavBar';
import {
  UserProfilePage,
  ProfilePage,
  HomePage,
  LoginPage,
} from 'components/pages';
import './styles.css';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUserById());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <header>
        <NavBar />
      </header>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/profile" exact component={UserProfilePage} />
        <Route path="/profile/:id" component={ProfilePage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
