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
import { DialogPage } from 'pages/DialogPage';
import { AuthorizedRoute } from 'hocs';

function App() {
  const wsConnection = new WebSocket('ws://localhost:3001');
  wsConnection.onopen = function () {
    console.log('Соединение установлено.');
  };

  wsConnection.onclose = function (event) {
    if (event.wasClean) {
      console.log('Соединение закрыто чисто');
    } else {
      console.log('Обрыв соединения'); // например, "убит" процесс сервера
    }
    console.log('Код: ' + event.code + ' причина: ' + event.reason);
  };

  wsConnection.onerror = function (error: any) {
    console.log('Ошибка ' + error.message);
  };

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
        <Route path="/user/:id" component={ProfilePage} />
        <Route path="/users" component={UsersPage} />
        {/* only for authorized */}
        <AuthorizedRoute path="/profile" exact>
          <UserProfilePage />
        </AuthorizedRoute>
        <AuthorizedRoute path="/dialog/:id">
          <DialogPage wsConnection={wsConnection} />
        </AuthorizedRoute>
        {/* <Route path="*" component={() => <>404 not found </>} /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
