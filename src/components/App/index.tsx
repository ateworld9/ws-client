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
  UsersPage,
} from 'pages';
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
        <Route path="/user/:id" component={ProfilePage} />
        <Route path="/users" component={UsersPage} />
        {/* <Route path="*" component={() => <>404 not found </>} /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
