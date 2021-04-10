import React from 'react';
import s from './LoginPage.module.css';
import googleLogo from '../../assets/google_logo.png';

const LoginPage = () => {
  return (
    <div className={s.loginPage}>
      <h1>Login Page</h1>
      <div className={s.loginForm}>
        <div className={s.googleContainer}>
          <img src={googleLogo} alt="google_logo" />
          <p>Login with Google</p>
        </div>
      </div>
    </div>
  );
};

export { LoginPage };
